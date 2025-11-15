# LinkeSinq Theming System

Enterprise-grade theming system with auto-generated CSS from TypeScript design tokens, battle-tested next-themes library, and zero hardcoded values.

## Architecture Overview

The theming system consists of:

1. **Design Tokens** (`src/configs/designTokens.ts`) - Single source of truth (TypeScript)
2. **CSS Generator** (`scripts/generate-theme-css.ts`) - Build-time CSS generation
3. **Generated CSS** (`src/styles/generated-theme.css`) - Auto-generated CSS variables
4. **ThemeProvider** (`src/components/ThemeProvider.tsx`) - React context using next-themes
5. **Tailwind Config** (`tailwind.config.ts`) - Utility classes using CSS variables

**Note:** We use pure CSS (not SCSS) for optimal performance with Tailwind v4 and to eliminate build warnings.

## Key Features

✅ **Zero Hardcoded Colors** - All colors generated from TypeScript tokens
✅ **Build-Time Generation** - CSS created once at build, zero runtime overhead
✅ **Enterprise Security** - No `dangerouslySetInnerHTML`, CSP-compliant
✅ **No Theme Flash** - next-themes prevents FOUC automatically
✅ **Type-Safe** - Full TypeScript support throughout
✅ **Battle-Tested** - next-themes used by Vercel, Shadcn/ui, thousands of apps
✅ **Easy Maintenance** - Change colors in one file, regenerate CSS

## How It Works

```
designTokens.ts → generate-theme-css.ts → generated-theme.css → globals.css → Tailwind
     (Source)         (Build Script)       (CSS Variables)       (Import)     (Classes)
```

1. **Define** colors in `src/configs/designTokens.ts` (TypeScript)
2. **Generate** CSS via `pnpm run generate:theme` (runs automatically before build)
3. **Import** generated CSS in `globals.css`
4. **Use** Tailwind classes in components (`bg-bg-primary`, etc.)

## Using Theme in Components

### Tailwind Classes (Recommended)

```tsx
<div className="bg-bg-primary text-text-primary border border-border-primary">
  <h2 className="text-2xl text-text-primary">Title</h2>
  <p className="text-text-secondary">Description</p>
  <button className="bg-accent-primary hover:bg-accent-hover">Click</button>
</div>
```

### Theme Switching

```tsx
'use client';

import { useTheme } from '~/hooks/useTheme';

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {currentTheme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
};
```

## Available Color Classes

### Background Colors
- `bg-bg-primary` - Main background (#0F111A dark / #FFFFFF light)
- `bg-bg-secondary` - Card/section background
- `bg-bg-tertiary` - Nested sections
- `bg-bg-elevated` - Modals, dropdowns

### Text Colors
- `text-text-primary` - Main text
- `text-text-secondary` - Secondary text
- `text-text-tertiary` - Muted text
- `text-text-inverse` - Text on colored backgrounds

### Accent Colors
- `bg-accent-primary` / `text-accent-primary` - Primary accent (#5E5BFF)
- `bg-accent-hover` - Hover state
- `bg-accent-muted` - Muted accent
- `bg-accent-light` - Light accent

### Border Colors
- `border-border-primary` - Default borders
- `border-border-secondary` - Secondary borders
- `border-border-focus` - Focus rings

### Status Colors
- `text-status-success` / `bg-status-success-muted`
- `text-status-warning` / `bg-status-warning-muted`
- `text-status-error` / `bg-status-error-muted`
- `text-status-info` / `bg-status-info-muted`

## Adding New Colors

### 1. Update Design Tokens

Edit `src/configs/designTokens.ts`:

```typescript
export const designTokens = {
  colors: {
    dark: {
      custom: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
      }
    },
    light: {
      custom: {
        primary: '#FF8787',
        secondary: '#6EDDD5',
      }
    }
  }
}
```

### 2. Regenerate CSS

```bash
pnpm run generate:theme
```

### 3. Add Tailwind Utilities

Edit `tailwind.config.ts`:

```typescript
colors: {
  'custom-primary': 'var(--custom-primary)',
  'custom-secondary': 'var(--custom-secondary)',
}
```

### 4. Use in Components

```tsx
<div className="bg-custom-primary text-custom-secondary">
```

## Theme Persistence

next-themes automatically handles:
- **localStorage** - User preference saved and restored
- **System Preference** - Respects OS dark/light mode
- **SSR Support** - No flash of incorrect theme
- **Sync Across Tabs** - Theme changes sync automatically

## Typography

### Font Families

```tsx
<p className="font-sans">  // Plus Jakarta Sans
<code className="font-mono">  // JetBrains Mono
```

### Font Sizes

```tsx
<p className="text-xs">    // 12px
<p className="text-sm">    // 14px
<p className="text-base">  // 16px (default)
<p className="text-lg">    // 18px
<p className="text-xl">    // 20px
<p className="text-2xl">   // 24px
<p className="text-3xl">   // 30px
<p className="text-4xl">   // 36px
<p className="text-5xl">   // 48px
<p className="text-6xl">   // 60px
```

## Animations

```tsx
<div className="animate-fade-in">
<div className="animate-slide-up">
<div className="animate-scale-in">
<div className="animate-pulse">
<div className="transition-all duration-300">
```

## Shadows

All shadows adapt automatically to theme:

```tsx
<div className="shadow-sm">    // Subtle
<div className="shadow-md">    // Medium
<div className="shadow-lg">    // Large
<div className="shadow-xl">    // Extra large
<div className="shadow-glow">  // Accent glow
```

## Scripts

```bash
# Generate theme CSS from tokens (runs automatically before build)
pnpm run generate:theme

# Build project (auto-generates theme first)
pnpm build

# Development (no need to regenerate theme manually)
pnpm dev
```

## File Structure

```
src/
├── configs/
│   └── designTokens.ts          # Source of truth (TypeScript)
├── styles/
│   └── generated-theme.css      # Auto-generated (don't edit)
├── components/
│   └── ThemeProvider.tsx        # next-themes wrapper
├── hooks/
│   └── useTheme.ts              # Re-export of next-themes hook
└── app/
    └── globals.css              # Imports generated theme

scripts/
└── generate-theme-css.ts        # Build-time CSS generator

tailwind.config.ts               # Uses CSS variables
```

## Best Practices

### DO
✅ Modify colors in `designTokens.ts` only
✅ Run `pnpm run generate:theme` after token changes
✅ Use Tailwind classes (`bg-bg-primary`)
✅ Use `useTheme()` hook for theme switching
✅ Test in both light and dark themes
✅ Use pure CSS (no SCSS needed)

### DON'T
❌ Edit `generated-theme.css` manually
❌ Hardcode colors anywhere (`#0F111A`, `rgb()`)
❌ Use arbitrary Tailwind values for theme colors
❌ Bypass the CSS generation system
❌ Modify theme colors at runtime
❌ Use SCSS features (we use pure CSS for Tailwind v4)

## Example Component

```tsx
'use client';

import { useTheme } from '~/hooks/useTheme';

const ThemedCard = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-bg-secondary border border-border-primary rounded-lg p-6 shadow-md transition-colors">
      <h2 className="text-2xl font-semibold text-text-primary mb-2">
        Enterprise Theming
      </h2>
      <p className="text-text-secondary mb-4">
        Zero hardcoded colors, build-time generation, type-safe.
      </p>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="bg-accent-primary hover:bg-accent-hover text-text-inverse px-4 py-2 rounded-md transition-colors"
      >
        Toggle Theme
      </button>
    </div>
  );
};
```

## Troubleshooting

### Colors Not Updating After Token Change

1. Run `pnpm run generate:theme` manually
2. Verify `generated-theme.css` was updated
3. Hard-refresh browser (Cmd+Shift+R)

### Build Fails on CSS Generation

1. Check `designTokens.ts` for syntax errors
2. Ensure all color values are valid hex codes
3. Run `pnpm run generate:theme` to see error details

### Theme Flash on Page Load

This should never happen with next-themes. If it does:
1. Verify `ThemeProvider` wraps your app in `layout.tsx`
2. Check `suppressHydrationWarning` is on `<html>` tag
3. Ensure next-themes version is 0.4.6+

### TypeScript Errors in Components

1. Restart TypeScript server in your IDE
2. Check imports use `~/` alias correctly
3. Verify `useTheme` is imported from `~/hooks/useTheme`

## Advanced Configuration

### Custom Theme Attributes

```tsx
// src/components/ThemeProvider.tsx
<ThemeProvider
  attribute="data-theme"
  defaultTheme="dark"
  enableSystem={true}
  disableTransitionOnChange={false}
  themes={['light', 'dark', 'custom']}  // Add custom themes
>
```

### Forced Theme for Specific Routes

```tsx
// app/admin/layout.tsx
import { ThemeProvider } from '~/components/ThemeProvider';

export default function AdminLayout({ children }) {
  return <ThemeProvider forcedTheme="light">{children}</ThemeProvider>;
}
```

## Migration from Old System

The old theming system with manual CSS and `dangerouslySetInnerHTML` has been removed. Benefits of the new system:

- ✅ No security risks (no innerHTML injection)
- ✅ Better performance (CSS generated once at build)
- ✅ Easier maintenance (single source of truth)
- ✅ Type-safe (TypeScript tokens)
- ✅ Enterprise-grade (battle-tested library)
