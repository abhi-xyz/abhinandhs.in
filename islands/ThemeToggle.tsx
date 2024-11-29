import { useEffect, useState } from "preact/hooks";

export default function ThemeToggle() {
  // Track the theme state (default: "system")
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  // On load, apply the correct theme
  useEffect(() => {
    const storedTheme = document.cookie
      .split("; ")
      .find((row) => row.startsWith("theme="))
      ?.split("=")[1];

    const systemPrefersDark = globalThis.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialTheme = storedTheme === "dark" ||
        (storedTheme === "system" && systemPrefersDark)
      ? "dark"
      : "light";

    setTheme(storedTheme as "light" | "dark" | "system");
    applyTheme(initialTheme);
  }, []);

  // Apply the theme class to <html>
  const applyTheme = (newTheme: "light" | "dark") => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Toggle between themes
  const toggleTheme = () => {
    const newTheme = theme === "dark"
      ? "light"
      : theme === "light"
      ? "system"
      : "dark";

    setTheme(newTheme);

    // Update cookie
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;

    // Apply theme immediately
    if (newTheme === "system") {
      const systemPrefersDark = globalThis.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      applyTheme(systemPrefersDark ? "dark" : "light");
    } else {
      applyTheme(newTheme);
    }
  };

  return (
    <button
      class=""
      onClick={toggleTheme}
    >
      {theme === "system"
        ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-monitor"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        )
        : theme === "dark"
        ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-moon"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        )
        : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-sun"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        )}
    </button>
  );
}
