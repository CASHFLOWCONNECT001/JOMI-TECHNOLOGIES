"use client";

import * as React from "react";
 
type ThemeMode = "light" | "dark";
type DefaultTheme = ThemeMode | "system";

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: DefaultTheme;
    enableSystem?: boolean;
    attribute?: string;
    disableTransitionOnChange?: boolean;
};

type ThemeContextValue = {
    theme: ThemeMode;
    resolvedTheme: ThemeMode;
    setTheme: (theme: ThemeMode) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

function getSystemTheme(): ThemeMode {
    if (typeof window === "undefined") return "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolveInitialTheme(defaultTheme: DefaultTheme, enableSystem: boolean): ThemeMode {
    if (typeof window === "undefined") return defaultTheme === "light" ? "light" : "dark";

    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
        return stored;
    }

    if (defaultTheme === "system") {
        return enableSystem ? getSystemTheme() : "dark";
    }

    return defaultTheme;
}

function applyThemeClass(theme: ThemeMode, attribute?: string) {
    if (typeof document === "undefined") return;
    const target = document.documentElement;

    if (attribute === "class" || !attribute) {
        target.classList.remove("light", "dark");
        target.classList.add(theme);
    } else {
        target.setAttribute(attribute, theme);
    }

    target.style.colorScheme = theme;
}

export function ThemeProvider({
    children,
    defaultTheme = "system",
    enableSystem = true,
    attribute = "class",
}: ThemeProviderProps) {
    const [theme, setThemeState] = React.useState<ThemeMode>(() =>
        resolveInitialTheme(defaultTheme, enableSystem),
    );

    React.useEffect(() => {
        applyThemeClass(theme, attribute);
        window.localStorage.setItem("theme", theme);
    }, [theme, attribute]);

    React.useEffect(() => {
        if (!enableSystem || defaultTheme !== "system") return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = () => {
            const stored = window.localStorage.getItem("theme");
            if (stored !== "light" && stored !== "dark") {
                setThemeState(getSystemTheme());
            }
        };

        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, [defaultTheme, enableSystem]);

    const setTheme = React.useCallback((nextTheme: ThemeMode) => {
        setThemeState(nextTheme);
    }, []);

    const value = React.useMemo(
        () => ({
            theme,
            resolvedTheme: theme,
            setTheme,
        }),
        [theme, setTheme],
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = React.useContext(ThemeContext);

    if (!context) {
        return {
            theme: "dark" as ThemeMode,
            resolvedTheme: "dark" as ThemeMode,
            setTheme: () => {},
        };
    }

    return context;
}
