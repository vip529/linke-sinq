export const designTokens = {
  colors: {
    dark: {
      bg: {
        primary: '#0F111A',
        secondary: '#1A1D2B',
        tertiary: '#252836',
        elevated: '#2A2D3B',
      },
      text: {
        primary: '#E6E8F0',
        secondary: '#A9B0C4',
        tertiary: '#6B7280',
        inverse: '#0F111A',
      },
      accent: {
        primary: '#5E5BFF',
        hover: '#4E4BEF',
        muted: '#3E3BDF',
        light: '#7E7BFF',
      },
      border: {
        primary: '#2A2D3B',
        secondary: '#3A3D4B',
        focus: '#5E5BFF',
      },
      status: {
        success: '#10B981',
        successMuted: '#065F46',
        warning: '#F59E0B',
        warningMuted: '#92400E',
        error: '#EF4444',
        errorMuted: '#991B1B',
        info: '#3B82F6',
        infoMuted: '#1E3A8A',
      },
    },
    light: {
      bg: {
        primary: '#FFFFFF',
        secondary: '#F9FAFB',
        tertiary: '#F3F4F6',
        elevated: '#FFFFFF',
      },
      text: {
        primary: '#111827',
        secondary: '#4B5563',
        tertiary: '#9CA3AF',
        inverse: '#FFFFFF',
      },
      accent: {
        primary: '#5E5BFF',
        hover: '#4E4BEF',
        muted: '#7E7BFF',
        light: '#9E9BFF',
      },
      border: {
        primary: '#E5E7EB',
        secondary: '#D1D5DB',
        focus: '#5E5BFF',
      },
      status: {
        success: '#10B981',
        successMuted: '#D1FAE5',
        warning: '#F59E0B',
        warningMuted: '#FEF3C7',
        error: '#EF4444',
        errorMuted: '#FEE2E2',
        info: '#3B82F6',
        infoMuted: '#DBEAFE',
      },
    },
  },

  typography: {
    fontFamily: {
      sans: 'var(--font-sans), system-ui, -apple-system, sans-serif',
      mono: 'var(--font-mono), "Courier New", monospace',
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.75rem', // 60px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.2',
      snug: '1.3',
      normal: '1.5',
      relaxed: '1.6',
      loose: '1.8',
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.02em',
    },
  },

  spacing: {
    0: '0',
    1: '0.25rem', // 4px
    2: '0.5rem', // 8px
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    8: '2rem', // 32px
    10: '2.5rem', // 40px
    12: '3rem', // 48px
    16: '4rem', // 64px
    20: '5rem', // 80px
    24: '6rem', // 96px
    32: '8rem', // 128px
  },

  borderRadius: {
    none: '0',
    sm: '0.25rem', // 4px
    md: '0.375rem', // 6px
    lg: '0.5rem', // 8px
    xl: '0.75rem', // 12px
    '2xl': '1rem', // 16px
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.6)',
    glow: '0 0 20px rgba(94, 91, 255, 0.3)',
    glowLg: '0 0 40px rgba(94, 91, 255, 0.4)',
  },

  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    overlay: 1200,
    modal: 1300,
    popover: 1400,
    tooltip: 1500,
  },
} as const;

export type Theme = 'light' | 'dark';
