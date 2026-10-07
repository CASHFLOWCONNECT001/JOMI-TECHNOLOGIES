"use client";

import { useEffect, useRef, useState } from "react";

type Example = {
  id: string;
  title: string;
  description: string;
  language: string;
  code: string;
  steps: string[];
  summary: string;
};

const EXAMPLES: Example[] = [
  {
    id: "status",
    title: "Service Status Check",
    description: "Confirm that core services are online before deployment.",
    language: "typescript",
    code: `type Status = "ok" | "warning" | "offline";

const services: Record<string, Status> = {
  api: "ok",
  database: "ok",
  mailer: "warning",
};

console.log("JOMI TECHNOLOGIES INSTITUTE — service check");
console.log(services);
console.log("Active systems:", Object.keys(services).length);`,
    steps: [
      "Initialising service check",
      "Loading service registry",
      "Contacting API endpoint",
      "Contacting database cluster",
      "Contacting mailer service",
      "Evaluating response codes",
      "Aggregating system status",
      "Preparing final summary",
    ],
    summary: "Service check complete — 3 systems reached, 2 healthy, 1 warning.",
  },
  {
    id: "erp",
    title: "ERP Invoice Totals",
    description: "Sum invoice amounts and confirm totals before posting to ERP.",
    language: "typescript",
    code: `const invoices = [
  { id: "INV-001", amount: 25000 },
  { id: "INV-002", amount: 18500 },
  { id: "INV-003", amount: 42000 },
];

const total = invoices.reduce((sum, inv) => sum + inv.amount, 0);

console.log("Invoices:", invoices.length);
console.log("Total (KES):", total.toLocaleString());`,
    steps: [
      "Loading invoice records",
      "Validating invoice amounts",
      "Applying currency format",
      "Running totals reduction",
      "Reconciling ledger entries",
      "Cross-checking tax rules",
      "Finalising computed totals",
      "Ready to post to ERP",
    ],
    summary: "Invoice totals computed — 3 invoices, KES 85,500 ready for ERP posting.",
  },
  {
    id: "crm",
    title: "CRM Lead Scoring",
    description: "Score inbound leads by source and engagement level.",
    language: "typescript",
    code: `const leads = [
  { name: "Acme Ltd", source: "referral", score: 80 },
  { name: "Beta Co", source: "webinar", score: 55 },
  { name: "Gamma Ltd", source: "website", score: 30 },
];

const ranked = leads.sort((a, b) => b.score - a.score);

console.log("Top leads:");
ranked.forEach((l, i) => console.log(\`\${i + 1}. \${l.name} — \${l.score}\`));`,
    steps: [
      "Fetching lead records",
      "Evaluating lead sources",
      "Scoring engagement signals",
      "Ranking leads by score",
      "Applying sales priority rules",
      "Flagging high-intent leads",
      "Preparing top-lead list",
      "Finalising ranked output",
    ],
    summary: "Lead scoring complete — 3 leads ranked, top lead: Acme Ltd (80).",
  },
  {
    id: "training",
    title: "Training Enrolment Summary",
    description: "Count learners per course and confirm enrolment figures.",
    language: "typescript",
    code: `const enrolments = [
  { course: "Computer Basics", learners: 24 },
  { course: "Microsoft Excel", learners: 31 },
  { course: "Digital Literacy", learners: 18 },
];

console.log("Training enrolment summary:");
enrolments.forEach((e) =>
  console.log(\`  \${e.course}: \${e.learners} learners\`)
);
console.log(
  "Total learners:",
  enrolments.reduce((sum, e) => sum + e.learners, 0)
);`,
    steps: [
      "Loading enrolment records",
      "Counting learners per course",
      "Validating course names",
      "Summing total learners",
      "Preparing enrolment report",
      "Verifying attendance data",
      "Formatting summary output",
      "Ready to publish figures",
    ],
    summary: "Enrolment summary ready — 3 courses, 73 learners in total.",
  },
  {
    id: "ecommerce",
    title: "E-commerce Cart Total",
    description: "Compute cart subtotal, tax, and grand total for checkout.",
    language: "typescript",
    code: `const cart = [
  { item: "Wireless Mouse", price: 1800, qty: 2 },
  { item: "USB-C Cable", price: 700, qty: 3 },
  { item: "Laptop Stand", price: 3500, qty: 1 },
];

const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
const tax = Math.round(subtotal * 0.16);
const total = subtotal + tax;

console.log("Subtotal:", subtotal);
console.log("VAT (16%):", tax);
console.log("Total:", total);`,
    steps: [
      "Reading shopping cart",
      "Validating item prices",
      "Calculating line totals",
      "Summing cart subtotal",
      "Applying 16% VAT",
      "Rounding final total",
      "Preparing checkout summary",
      "Ready for payment gateway",
    ],
    summary: "Cart total ready — subtotal 9,800, VAT 1,568, total 11,368.",
  },
  {
    id: "fullstack",
    title: "Frontend → Backend → Database",
    description:
      "How a user action travels through the stack and returns a response.",
    language: "typescript",
    code: `// 1. FRONTEND — user clicks "Load Orders"
async function loadOrders() {
  const res = await fetch("/api/orders?user=42", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  render(data);
}

// 2. BACKEND — API route receives the request
app.get("/api/orders", async (req, res) => {
  const user = req.query.user;
  const rows = await db.query(
    "SELECT id, total, status FROM orders WHERE user_id = $1",
    [user]
  );
  res.json({ ok: true, count: rows.length, rows });
});

// 3. DATABASE — executes the query, returns rows
// SELECT id, total, status FROM orders WHERE user_id = 42;
// → 3 rows returned to the backend`,
    steps: [
      "Frontend: user clicks 'Load Orders'",
      "Frontend: sending GET /api/orders?user=42",
      "Backend: request received by API route",
      "Backend: validating session and query",
      "Backend: preparing database query",
      "Database: executing SELECT on orders table",
      "Database: returning 3 matching rows",
      "Backend: formatting JSON response",
      "Frontend: rendering response to the user",
    ],
    summary:
      "Full stack round-trip complete — frontend, backend, and database responded in order.",
  },
  {
    id: "internet-flow",
    title: "Internet Data Flow (Fetch & Save)",
    description:
      "How data is retrieved from the internet and stored back to the database.",
    language: "typescript",
    code: `// 1. CLIENT — requests a resource that needs internet data
async function syncWeather(city: string) {
  const res = await fetch("/api/weather/sync", {
    method: "POST",
    body: JSON.stringify({ city }),
  });
  return res.json();
}

// 2. BACKEND — receives request, calls external internet API
app.post("/api/weather/sync", async (req, res) => {
  const { city } = req.body;

  // 3. INTERNET — fetch live data from external provider
  const apiRes = await fetch(
    \`https://api.weather.com/v1/current?city=\${city}\`
  );
  const payload = await apiRes.json();

  // 4. DATABASE — persist the fetched data
  await db.query(
    "INSERT INTO weather_logs (city, temp, humidity, fetched_at) VALUES ($1,$2,$3,NOW())",
    [city, payload.temp, payload.humidity]
  );

  // 5. BACKEND → CLIENT — return confirmation
  res.json({ ok: true, saved: true, city, temp: payload.temp });
}`,
    steps: [
      "Client: user requests weather for Nairobi",
      "Client: sending POST /api/weather/sync",
      "Backend: request received, parsing body",
      "Backend: preparing outbound API call",
      "Internet: calling external weather provider",
      "Internet: receiving live weather payload",
      "Backend: parsing and validating response",
      "Database: INSERT new weather record",
      "Database: confirming write successful",
      "Backend: formatting JSON confirmation",
      "Client: displaying saved weather result",
    ],
    summary:
      "Internet data fetched, stored, and confirmed — full sync round-trip complete.",
  },
];

const STEP_PHASE_MS = 15000;
const SUMMARY_HOLD_MS = 4000;
const TYPING_SPEED_MS = 26;

type RunState = "idle" | "running";

export function CodeBulbRunner() {
  const [states, setStates] = useState<Record<string, RunState>>({});
  const [outputs, setOutputs] = useState<Record<string, string>>({});
  const [tickers, setTickers] = useState<Record<string, string>>({});
  const timers = useRef<Record<string, ReturnType<typeof setTimeout>[]>>({});
  const intervals = useRef<Record<string, ReturnType<typeof setInterval>[]>>(
    {}
  );

  useEffect(() => {
    return () => {
      Object.values(timers.current).flat().forEach(clearTimeout);
      Object.values(intervals.current).flat().forEach(clearInterval);
    };
  }, []);

  function clearAll(id: string) {
    (timers.current[id] || []).forEach(clearTimeout);
    (intervals.current[id] || []).forEach(clearInterval);
    timers.current[id] = [];
    intervals.current[id] = [];
  }

  function typeMessage(
    id: string,
    message: string,
    speed: number,
    onDone?: () => void
  ) {
    setTickers((prev) => ({ ...prev, [id]: "" }));
    let i = 0;
    const typer = setInterval(() => {
      i++;
      setTickers((prev) => ({ ...prev, [id]: message.slice(0, i) }));
      if (i >= message.length) {
        clearInterval(typer);
        onDone?.();
      }
    }, speed);
    intervals.current[id] = [...(intervals.current[id] || []), typer];
  }

  function run(example: Example) {
    clearAll(example.id);
    setOutputs((prev) => ({ ...prev, [example.id]: "" }));
    setStates((prev) => ({ ...prev, [example.id]: "running" }));

    const totalSteps = example.steps.length;
    const perStepBudget = Math.floor(STEP_PHASE_MS / totalSteps);

    let stepIndex = 0;

    function runStep() {
      if (stepIndex >= totalSteps) {
        typeMessage(example.id, example.summary, TYPING_SPEED_MS, () => {
          const hold = setTimeout(() => {
            setStates((prev) => ({ ...prev, [example.id]: "idle" }));
            clearAll(example.id);
          }, SUMMARY_HOLD_MS);
          timers.current[example.id] = [
            ...(timers.current[example.id] || []),
            hold,
          ];
        });

        const result = extractConsoleOutput(example.code);
        setOutputs((prev) => ({ ...prev, [example.id]: result }));
        return;
      }

      const message = example.steps[stepIndex];
      stepIndex++;

      const typingTime = message.length * TYPING_SPEED_MS;
      const pauseAfter = Math.max(perStepBudget - typingTime, 100);

      typeMessage(example.id, message, TYPING_SPEED_MS, () => {
        const pause = setTimeout(runStep, pauseAfter);
        timers.current[example.id] = [
          ...(timers.current[example.id] || []),
          pause,
        ];
      });
    }

    runStep();
  }

  return (
    <div className="grid gap-5 lg:grid-cols-2 [&>*:last-child:nth-child(odd)]:lg:col-span-2">
      {EXAMPLES.map((example, index) => (
        <ExampleCard
          key={example.id}
          example={example}
          index={index}
          state={states[example.id] || "idle"}
          output={outputs[example.id] || ""}
          ticker={tickers[example.id] || ""}
          onRun={() => run(example)}
        />
      ))}
    </div>
  );
}

function ExampleCard({
  example,
  index,
  state,
  output,
  ticker,
  onRun,
}: {
  example: Example;
  index: number;
  state: RunState;
  output: string;
  ticker: string;
  onRun: () => void;
}) {
  const isLit = state === "running";
  const hue = 45 + ((index * 37) % 120);

  return (
    <div
      className="code-bulb-card group/bulb relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border p-4 transition-all duration-500 hover:-translate-y-0.5"
      data-lit={isLit ? "true" : undefined}
      style={{ "--hue": hue } as React.CSSProperties}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ${
          isLit ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(120% 90% at 50% 0%, hsl(${hue} 100% 60% / 0.14), transparent 65%)`,
        }}
      />

      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-20 rounded-[var(--radius-card)] transition-opacity duration-500 ${
          isLit ? "opacity-100" : "opacity-0"
        }`}
        style={{
          padding: "1px",
          background: `conic-gradient(from var(--angle, 0deg), transparent 0deg, hsl(${hue} 90% 60% / 0.9) 120deg, transparent 240deg)`,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          animation: isLit ? "svc-rotate 4s linear infinite" : "none",
        }}
      />

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <Bulb lit={isLit} hue={hue} />
          <div>
            <p
              className="text-sm font-semibold leading-tight"
              style={{
                color: "var(--foreground)",
                textShadow: isLit ? "0 1px 2px rgba(0,0,0,0.45)" : "none",
              }}
            >
              {example.title}
            </p>
            <p
              className="mt-0.5 text-xs"
              style={{
                color: isLit
                  ? "color-mix(in oklab, var(--foreground) 82%, transparent)"
                  : "color-mix(in oklab, var(--foreground) 60%, transparent)",
              }}
            >
              {example.description}
            </p>
          </div>
        </div>

        <span
          className="rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider"
          style={{
            borderColor: isLit
              ? `hsl(${hue} 80% 60% / 0.45)`
              : "color-mix(in oklab, currentColor 15%, transparent)",
            color: isLit
              ? `hsl(${hue} 85% 70%)`
              : "color-mix(in oklab, var(--foreground) 60%, transparent)",
          }}
        >
          {example.language}
        </span>
      </div>

      <pre
        className="relative z-10 mt-3 max-h-52 overflow-auto rounded-lg border p-3 text-[11.5px] leading-relaxed"
        style={{
          background: "rgba(4, 8, 18, 0.92)",
          borderColor: isLit
            ? `hsl(${hue} 70% 55% / 0.35)`
            : "color-mix(in oklab, currentColor 12%, transparent)",
          color: "#d8f6ff",
        }}
      >
        <code>{example.code}</code>
      </pre>

      <Ticker text={ticker} lit={isLit} hue={hue} />

      <div className="relative z-10 mt-3 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onRun}
          disabled={isLit}
          className="inline-flex items-center gap-2 rounded-[var(--radius-cta)] border px-3.5 py-1.5 text-xs font-semibold transition-all disabled:opacity-70"
          style={{
            borderColor: isLit
              ? `hsl(${hue} 80% 60% / 0.6)`
              : "color-mix(in oklab, currentColor 25%, transparent)",
            background: isLit
              ? `hsl(${hue} 80% 60% / 0.18)`
              : "rgba(6, 21, 58, 0.55)",
            color: isLit ? `hsl(${hue} 90% 78%)` : "var(--foreground)",
          }}
        >
          {isLit ? (
            <>
              <span className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Running…
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                <path d="M8 5v14l11-7z" />
              </svg>
              Run
            </>
          )}
        </button>

        {isLit && (
          <span
            className="text-[11px] font-medium"
            style={{
              color: `hsl(${hue} 90% 75%)`,
              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            ● Live
          </span>
        )}
      </div>

      {output && (
        <pre
          className="relative z-10 mt-3 max-h-40 overflow-auto rounded-lg border p-3 text-[11px] leading-relaxed transition-opacity duration-500"
          style={{
            background: `hsl(${hue} 55% 12% / 0.9)`,
            borderColor: `hsl(${hue} 70% 55% / 0.45)`,
            color: `hsl(${hue} 95% 88%)`,
            opacity: isLit ? 1 : 0,
          }}
        >
          <code>{output}</code>
        </pre>
      )}

      <style jsx>{`
        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        .code-bulb-card {
          border-color: color-mix(in oklab, currentColor 12%, transparent);
          background: color-mix(in oklab, currentColor 2%, transparent);
        }
        .code-bulb-card[data-lit="true"] {
          border-color: hsl(var(--hue) 80% 60% / 0.55);
          background: hsl(var(--hue) 45% 20% / 0.35);
          box-shadow:
            0 0 0 1px hsl(var(--hue) 80% 60% / 0.25),
            0 20px 60px -20px hsl(var(--hue) 90% 55% / 0.55);
        }
        @keyframes svc-rotate {
          to {
            --angle: 360deg;
          }
        }
      `}</style>
    </div>
  );
}

function Ticker({
  text,
  lit,
  hue,
}: {
  text: string;
  lit: boolean;
  hue: number;
}) {
  return (
    <div
      className="relative z-10 mt-3 flex h-8 items-center overflow-hidden rounded-md border font-mono text-[11px]"
      style={{
        borderColor: lit
          ? `hsl(${hue} 80% 60% / 0.45)`
          : "color-mix(in oklab, currentColor 12%, transparent)",
        background: "rgba(2, 6, 14, 0.9)",
      }}
      aria-live="polite"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px)",
        }}
      />

      <span
        className="relative z-20 ml-3 h-2 w-2 shrink-0 rounded-full"
        style={{
          background: lit ? `hsl(${hue} 100% 60%)` : "rgba(120,130,150,0.5)",
          boxShadow: lit
            ? `0 0 8px hsl(${hue} 100% 60% / 0.9), 0 0 16px hsl(${hue} 100% 60% / 0.5)`
            : "none",
          animation: lit ? "led-blink 1s steps(2) infinite" : "none",
        }}
      />

      <div className="relative z-20 ml-3 flex-1 overflow-hidden whitespace-nowrap">
        <span
          style={{
            color: lit ? `hsl(${hue} 95% 78%)` : "rgba(180,190,210,0.65)",
            textShadow: lit ? `0 0 6px hsl(${hue} 100% 55% / 0.7)` : "none",
          }}
        >
          {text || "— idle —"}
        </span>
        {lit && (
          <span
            className="ml-0.5 inline-block animate-pulse"
            style={{ color: `hsl(${hue} 100% 70%)` }}
          >
            ▌
          </span>
        )}
      </div>

      <style jsx>{`
        @keyframes led-blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.35;
          }
        }
      `}</style>
    </div>
  );
}

function Bulb({ lit, hue }: { lit: boolean; hue: number }) {
  return (
    <span
      className="bulb-wrapper relative z-10 flex h-9 w-9 shrink-0 items-center justify-center"
      style={{ "--bulb-hue": hue } as React.CSSProperties}
    >
      <span
        className={`absolute inset-0 rounded-full blur-md transition-all duration-500 ${
          lit ? "scale-125 opacity-90" : "scale-75 opacity-0"
        }`}
        style={{
          background: `radial-gradient(circle, hsl(${hue} 100% 65% / 0.75), transparent 70%)`,
        }}
      />

      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`relative h-6 w-6 transition-colors duration-300 ${
          lit ? "text-transparent" : "text-foreground/40"
        }`}
      >
        <path
          d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z"
          fill={lit ? `hsl(${hue} 100% 60%)` : "transparent"}
          stroke={lit ? `hsl(${hue} 90% 55%)` : "currentColor"}
        />
        <path
          d="M12 8v3"
          stroke={lit ? `hsl(${hue} 100% 90%)` : "currentColor"}
          strokeWidth="2"
          className={lit ? "animate-pulse" : ""}
        />
      </svg>

      <style jsx>{`
        .bulb-wrapper {
          filter: drop-shadow(
            0 0 ${lit ? "8px" : "0"} hsl(var(--bulb-hue) 100% 60% / 0.6)
          );
          transition: filter 400ms ease;
        }
      `}</style>
    </span>
  );
}

function extractConsoleOutput(code: string): string {
  const lines = code.split("\n");
  const outputs: string[] = [];
  const context: Record<string, unknown> = {};

  for (const raw of lines) {
    const line = raw.trim();

    const arrMatch = line.match(/^const\s+(\w+)\s*=\s*\[/);
    if (arrMatch) {
      const name = arrMatch[1];
      try {
        const startIdx = lines.indexOf(raw);
        let depth = 0;
        let collected = "";
        for (let i = startIdx; i < lines.length; i++) {
          const l = lines[i];
          collected += l + "\n";
          depth += (l.match(/\[/g) || []).length;
          depth -= (l.match(/\]/g) || []).length;
          if (depth === 0 && i > startIdx) break;
        }
        const literal = collected
          .replace(/^const\s+\w+\s*=\s*/, "")
          .replace(/;\s*$/, "");
        // eslint-disable-next-line no-new-func
        context[name] = new Function(`return ${literal};`)();
      } catch {
        context[name] = [];
      }
      continue;
    }

    const objMatch = line.match(/^const\s+(\w+)\s*=\s*\{/);
    if (objMatch) {
      const name = objMatch[1];
      try {
        const startIdx = lines.indexOf(raw);
        let depth = 0;
        let collected = "";
        for (let i = startIdx; i < lines.length; i++) {
          const l = lines[i];
          collected += l + "\n";
          depth += (l.match(/\{/g) || []).length;
          depth -= (l.match(/\}/g) || []).length;
          if (depth === 0 && i > startIdx) break;
        }
        const literal = collected
          .replace(/^const\s+\w+\s*=\s*/, "")
          .replace(/;\s*$/, "");
        // eslint-disable-next-line no-new-func
        context[name] = new Function(`return ${literal};`)();
      } catch {
        context[name] = {};
      }
      continue;
    }

    if (line.includes("console.log(")) {
      const arg = line
        .replace(/.*console\.log\(/, "")
        .replace(/\);?\s*$/, "")
        .trim();

      if (/Object\.keys\(\w+\)\.length/.test(arg)) {
        const name = arg.match(/Object\.keys\((\w+)\)/)?.[1] ?? "";
        outputs.push(
          String(Object.keys((context[name] as object) || {}).length)
        );
        continue;
      }

      if (/reduce\(/.test(arg)) {
        const arrName = arg.match(/(\w+)\.reduce/)?.[1] ?? "";
        const arr = context[arrName] as Array<Record<string, number>> | undefined;
        if (Array.isArray(arr)) {
          if (arrName === "invoices") {
            outputs.push(
              String(
                arr.reduce((s, i) => s + (i.amount || 0), 0).toLocaleString()
              )
            );
          } else if (arrName === "enrolments") {
            outputs.push(
              String(arr.reduce((s, i) => s + (i.learners || 0), 0))
            );
          } else if (arrName === "cart") {
            outputs.push(
              String(arr.reduce((s, i) => s + i.price * i.qty, 0))
            );
          }
        }
        continue;
      }

      if (/^['"`]/.test(arg)) {
        outputs.push(arg.replace(/^['"`]|['"`]$/g, ""));
        continue;
      }

      if (context[arg]) {
        outputs.push(JSON.stringify(context[arg]));
        continue;
      }

      if (context[arg] !== undefined) {
        outputs.push(String(context[arg]));
        continue;
      }

      outputs.push(arg);
    }
  }

  if (outputs.length === 0) {
    return "✓ Script executed successfully.";
  }

  return outputs.join("\n");
}