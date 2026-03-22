"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5b8fff",
    },
    secondary: {
      main: "#43e8b0",
    },
    warning: {
      main: "#ffd166",
    },
    error: {
      main: "#ff6b6b",
    },
    info: {
      main: "#7c6aff",
    },
    background: {
      default: "#0b0c10",
      paper: "#12151f",
    },
    text: {
      primary: "#d8e0f0",
      secondary: "#9da6c2",
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: "var(--font-lora), serif",
    h1: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h2: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
    overline: {
      fontFamily: "var(--font-dm-mono), monospace",
      letterSpacing: "0.16em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "::selection": {
          backgroundColor: "rgba(91,143,255,0.35)",
          color: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid rgba(42, 48, 66, 0.9)",
        },
      },
    },
  },
});

export default function MaterialThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
