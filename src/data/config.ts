export const CONFIG = {
  // ---------------------------------------------------------------------------
  // Site Settings
  // ---------------------------------------------------------------------------
  site: {
    url: "https://rinicesiberia.github.io",
    locale: "zh_CN",
    twitterHandle: "",
  },

  // ---------------------------------------------------------------------------
  // SEO Settings
  // ---------------------------------------------------------------------------
  seo: {
    titleTemplate: "%s | %n", // %s = page title, %n = DATA.name
    twitterCard: "summary_large_image" as const,
    robots: "index, follow",
  },

  // ---------------------------------------------------------------------------
  // Typography
  // ---------------------------------------------------------------------------
  typography: {
    // Base font size as a percentage. 100 = browser default (16px).
    // 110 = 10% larger or 90 = 10% smaller, across all text, headings, and links simultaneously.
    baseFontSize: 100,
  },

  // ---------------------------------------------------------------------------
  // Font Settings
  // See https://fontsource.org/?variable=true for fonts that can be installed via package registry
  // To change fonts:
  // 1. pnpm install @fontsource-variable/<font-name> (for example 'pnpm add @fontsource-variable/inter'). Install BOTH the sans and mono fonts.
  // 2. Edit src/styles/global.css - swap the @import and --font-sans and --font-mono values
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // Design Settings
  // 1. Pick a theme at ui.shadcn.com/themes or generate one with a tool like tweakcn.com
  // 2. Copy the CSS variables block
  // 3. Paste into BELOW with the naming conversion already used
  // ---------------------------------------------------------------------------

  theme: {
    radius: "0.35rem",

    light: {
      background: "#f3f6f7",
      foreground: "#122238",
      card: "#f9fbfb",
      cardForeground: "#122238",
      popover: "#f9fbfb",
      popoverForeground: "#122238",
      primary: "#15324d",
      primaryForeground: "#f8fbfc",
      secondary: "#e6ecef",
      secondaryForeground: "#15324d",
      muted: "#e8edef",
      mutedForeground: "#657485",
      accent: "#dbe8ee",
      accentForeground: "#15324d",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "#cfd9de",
      input: "#cfd9de",
      ring: "#367d9f",
    },

    dark: {
      background: "#0d1722",
      foreground: "#edf3f5",
      card: "#13212e",
      cardForeground: "#edf3f5",
      popover: "#13212e",
      popoverForeground: "#edf3f5",
      primary: "#dfe9ed",
      primaryForeground: "#102033",
      secondary: "#1c2c3b",
      secondaryForeground: "#edf3f5",
      muted: "#1a2936",
      mutedForeground: "#99a8b4",
      accent: "#213848",
      accentForeground: "#edf3f5",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "#2b3c4a",
      input: "#2b3c4a",
      ring: "#6aa7c2",
    },
  },

} as const;
