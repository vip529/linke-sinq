/**
 * Theme Hook
 *
 * Re-exports useTheme from next-themes for convenience.
 * Provides type-safe theme management with no manual implementation needed.
 *
 * @example
 * import { useTheme } from '~/hooks/useTheme';
 *
 * const MyComponent = () => {
 *   const { theme, setTheme, systemTheme } = useTheme();
 *
 *   return (
 *     <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
 *       Current: {theme === 'system' ? systemTheme : theme}
 *     </button>
 *   );
 * };
 */

export { useTheme } from 'next-themes';
