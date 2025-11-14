'use client';

import type { ThemeProviderProps } from 'next-themes';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

/**
 * Theme Provider Component
 *
 * Wraps the application to provide theme switching capabilities.
 * Uses next-themes for enterprise-grade theme management.
 *
 * Features:
 * - No flash of incorrect theme
 * - Respects system preferences
 * - Persists user choice in localStorage
 * - Type-safe theme management
 *
 * @example
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 */
export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
};
