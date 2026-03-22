"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#43e8b0",
    },
    secondary: {
      main: "#5b8fff",
    },
    warning: {
      main: "#ffd166",
    },
    error: {
      main: "#ff6b6b",
    },
    info: {
      main: "#8cb78c",
    },
    background: {
      default: "#060806",
      paper: "#0d120d",
    },
    text: {
      primary: "#d8ffd8",
      secondary: "#8cb78c",
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
          backgroundColor: "rgba(67,232,176,0.3)",
          color: "#021002",
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
          border: "1px solid rgba(34, 64, 34, 0.9)",
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
