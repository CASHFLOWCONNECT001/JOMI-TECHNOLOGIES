"use client";

import { useState } from "react";

import { cn } from "@/lib/cn";

type Language = "javascript" | "typescript" | "python";

interface CodeExample {
  javascript?: string;
  typescript?: string;
  python?: string;
}

interface CodeExampleSwitcherProps {
  examples: CodeExample;
  className?: string;
}

type RunState = {
  status: "idle" | "running" | "success" | "error" | "info";
  output: string[];
};

const EXECUTION_TIMEOUT_MS = 4000;
const PYTHON_EXECUTION_TIMEOUT_MS = 20000;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

type PythonRunEnvelope = {
  success: boolean;
  message?: string;
  data?: {
    run?: {
      status?: "success" | "error";
      output?: string[];
    };
  };
};

function createInitialRunState(): RunState {
  return {
    status: "idle",
    output: ["Run a sample to see console output here."],
  };
}

function serializeConsoleValue(value: unknown) {
  if (typeof value === "string") return value;

  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

async function runJavaScriptExample(source: string): Promise<RunState> {
  const capturedLogs: string[] = [];
  const originalConsole = {
    log: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error,
  };

  const pushLog = (level: "log" | "info" | "warn" | "error", values: unknown[]) => {
    const rendered = values.map((value) => serializeConsoleValue(value)).join(" ");
    capturedLogs.push(`[${level}] ${rendered}`);
  };

  console.log = (...values: unknown[]) => pushLog("log", values);
  console.info = (...values: unknown[]) => pushLog("info", values);
  console.warn = (...values: unknown[]) => pushLog("warn", values);
  console.error = (...values: unknown[]) => pushLog("error", values);

  try {
    const asyncRunner = new Function(`
      return (async () => {
        ${source}
      })();
    `);

    await Promise.race([
      Promise.resolve(asyncRunner()),
      new Promise((_, reject) => {
        window.setTimeout(() => {
          reject(new Error("Execution timed out after 4 seconds."));
        }, EXECUTION_TIMEOUT_MS);
      }),
    ]);

    return {
      status: "success",
      output:
        capturedLogs.length > 0
          ? capturedLogs
          : ["Execution completed. No console output was produced."],
    };
  } catch (error) {
    return {
      status: "error",
      output: [...capturedLogs, error instanceof Error ? error.message : "Execution failed."],
    };
  } finally {
    console.log = originalConsole.log;
    console.info = originalConsole.info;
    console.warn = originalConsole.warn;
    console.error = originalConsole.error;
  }
}

async function runTypeScriptExample(source: string): Promise<RunState> {
  try {
    const ts = await import("typescript");
    const transpiled = ts.transpileModule(source, {
      compilerOptions: {
        target: ts.ScriptTarget.ES2020,
        module: ts.ModuleKind.ES2020,
      },
      reportDiagnostics: true,
    });

    const diagnostics = transpiled.diagnostics ?? [];
    if (diagnostics.length > 0) {
      const messages = diagnostics.map((diagnostic) => {
        const text = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
        return `TypeScript: ${text}`;
      });
      return {
        status: "error",
        output: messages,
      };
    }

    return runJavaScriptExample(transpiled.outputText);
  } catch (error) {
    return {
      status: "error",
      output: [error instanceof Error ? error.message : "TypeScript execution failed."],
    };
  }
}

async function runPythonExample(source: string): Promise<RunState> {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), PYTHON_EXECUTION_TIMEOUT_MS);

  try {
    const response = await fetch(`${API_BASE_URL}/api/developers/run-python/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ source }),
      signal: controller.signal,
    });

    const payload = (await response.json()) as PythonRunEnvelope;
    const output = payload?.data?.run?.output ?? [];

    if (!response.ok || payload?.success === false) {
      return {
        status: "error",
        output:
          output.length > 0
            ? output
            : [payload?.message ?? `Python execution request failed (${response.status}).`],
      };
    }

    return {
      status: payload?.data?.run?.status === "error" ? "error" : "success",
      output: output.length > 0 ? output : ["Execution completed. No console output was produced."],
    };
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      return {
        status: "error",
        output: ["Python execution timed out while waiting for backend response."],
      };
    }

    return {
      status: "error",
      output: [error instanceof Error ? error.message : "Python execution failed."],
    };
  } finally {
    window.clearTimeout(timeoutId);
  }
}

function RunIcon({ running }: { running: boolean }) {
  if (running) {
    return (
      <svg
        className="animate-spin h-3.5 w-3.5 shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
    );
  }

  return (
    <svg
      className="h-3.5 w-3.5 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  );
}

export function CodeExampleSwitcher({ examples, className }: CodeExampleSwitcherProps) {
  const availableLanguages = (["typescript", "javascript", "python"] as const).filter(
    (lang) => examples[lang]?.trim(),
  ) as Language[];

  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    availableLanguages.includes("typescript") ? "typescript" : availableLanguages[0] || "typescript",
  );
  const [runState, setRunState] = useState<RunState>(createInitialRunState);

  const languageLabels: Record<Language, string> = {
    javascript: "JavaScript",
    typescript: "TypeScript",
    python: "Python",
  };

  const canRunInBrowser = true;
  const isRunning = runState.status === "running";
  const currentCode = examples[selectedLanguage];

  async function handleRun() {
    const currentSource = examples[selectedLanguage]?.trim() ?? "";
    if (!currentSource) {
      setRunState({
        status: "info",
        output: ["No code is available for the selected language."],
      });
      return;
    }

    setRunState({
      status: "running",
      output: [`Running ${languageLabels[selectedLanguage]} example...`],
    });

    let nextRunState: RunState;
    if (selectedLanguage === "javascript") {
      nextRunState = await runJavaScriptExample(currentSource);
    } else if (selectedLanguage === "typescript") {
      nextRunState = await runTypeScriptExample(currentSource);
    } else {
      nextRunState = await runPythonExample(currentSource);
    }

    setRunState(nextRunState);
  }

  function handleLanguageChange(nextLanguage: Language) {
    setSelectedLanguage(nextLanguage);
    setRunState(createInitialRunState());
  }

  return (
    <div
      className={cn(
        "mt-5 w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(2,6,23,0.08)] dark:border-white/10 dark:bg-[#0b1220] dark:shadow-[0_20px_60px_rgba(2,6,23,0.28)]",
        className,
      )}
    >
      <div className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fafc)] px-3 py-3 sm:px-4 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0 flex flex-wrap items-center gap-2">
            <span
              className="rounded-full border border-slate-500 bg-slate-800 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-50"
            >
              Language
            </span>
            <div className="min-w-0 flex flex-wrap gap-1.5">
              {availableLanguages.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => handleLanguageChange(lang)}
                  className={cn(
                    "rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition sm:px-3 sm:text-xs",
                    selectedLanguage === lang
                      ? "bg-[var(--color-brand-aqua)] text-slate-950"
                      : "border border-slate-500 bg-slate-800 text-slate-50 hover:border-slate-300 hover:bg-slate-700 hover:text-white",
                  )}
                >
                  {languageLabels[lang]}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => void handleRun()}
            disabled={isRunning}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold shadow-sm transition",
              canRunInBrowser
                ? "border-[var(--color-brand-aqua)]/50 bg-[var(--color-brand-aqua)] text-slate-950 hover:scale-[1.03] hover:bg-[var(--color-brand-lime)] active:scale-100 disabled:opacity-60"
                : "border-white/15 bg-slate-800 text-white/80 hover:bg-slate-700 active:scale-100",
            )}
          >
            <RunIcon running={isRunning} />
            <span>{isRunning ? "Running..." : canRunInBrowser ? "Run Code" : "Show Guidance"}</span>
          </button>
        </div>
      </div>

      <div className="max-w-full border-b border-slate-200 bg-[#0f172a] dark:border-white/8 dark:bg-[#0a0f1a]">
        {currentCode ? (
          <pre className="code-block-brand w-full max-w-full overflow-x-auto p-3 text-xs leading-6 sm:p-4 sm:text-sm sm:leading-7">
            <code className="block min-w-max">{currentCode}</code>
          </pre>
        ) : (
          <div className="p-4 text-sm text-white/70">
            No code example available for {languageLabels[selectedLanguage]}.
          </div>
        )}
      </div>

      <div className="bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(248,250,252,0.92))] px-4 py-4 dark:bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(255,255,255,0.02))]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 dark:text-white/68">
              Run Sample
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-white/50">
              {selectedLanguage === "javascript"
                ? "Execute this JavaScript sample in the browser and inspect its console output below."
                : selectedLanguage === "typescript"
                  ? "This TypeScript sample compiles in-browser and executes as JavaScript."
                  : "This Python sample executes on the backend runner to avoid browser runtime limits."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span
              className={cn(
                "rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]",
                canRunInBrowser
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-200"
                  : "bg-slate-200 text-slate-600 dark:bg-white/8 dark:text-white/55",
              )}
            >
              Runnable
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[linear-gradient(180deg,rgba(34,211,238,0.14),rgba(255,255,255,0.03))] px-4 py-4 dark:bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(255,255,255,0.02))]">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
            Output
          </p>
          <span
            className={cn(
              "rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]",
              runState.status === "success"
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-200"
                : runState.status === "error"
                  ? "bg-red-100 text-red-700 dark:bg-red-400/15 dark:text-red-200"
                  : runState.status === "running"
                    ? "bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-200"
                    : "bg-slate-200 text-slate-600 dark:bg-white/8 dark:text-white/55",
            )}
          >
            {runState.status}
          </span>
        </div>
        <div className="mt-3 rounded-xl border border-slate-300 bg-[#f8fbff] p-4 shadow-sm dark:border-white/8 dark:bg-[#050914]">
          <pre className="min-h-24 whitespace-pre-wrap break-words text-xs leading-6 text-slate-700 dark:text-[#d7e3ff]">
            {runState.output.join("\n")}
          </pre>
        </div>
      </div>
    </div>
  );
}
