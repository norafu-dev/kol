"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      position="top-center"
      richColors
      style={{
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--success-bg": "var(--success)",
        "--success-text": "var(--success-foreground)",
        "--success-border": "var(--success-border)",
        "--error-bg": "var(--error)",
        "--error-text": "var(--error-foreground)",
        "--error-border": "var(--error-border)",
      }}
      {...props}
    />
  );
};

export { Toaster };
