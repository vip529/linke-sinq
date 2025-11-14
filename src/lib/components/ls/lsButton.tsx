'use client';

import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from 'react';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '~/lib/constants/lsComponentConstants';
import SpinnerIcon from '~/svgs/ls/spinner.svg';
import { cva, type VariantProps } from '~/utils/styled';

const buttonStyles = cva(
  'inline-flex items-center justify-center gap-2 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
  {
    variants: {
      variant: {
        [BUTTON_VARIANTS.PRIMARY]:
          'bg-accent-primary text-text-inverse hover:bg-accent-hover active:bg-accent-muted transition-all duration-300 shadow-sm hover:shadow-glow',
        [BUTTON_VARIANTS.SECONDARY]:
          'bg-bg-secondary text-text-primary border border-border-primary hover:bg-bg-tertiary hover:border-border-secondary active:bg-bg-elevated transition-all duration-300',
        [BUTTON_VARIANTS.GHOST]:
          'bg-transparent text-text-primary hover:bg-bg-secondary active:bg-bg-tertiary transition-all duration-300',
        [BUTTON_VARIANTS.DANGER]:
          'bg-status-error text-text-inverse hover:bg-status-error/90 active:bg-status-error/80 transition-all duration-300 shadow-sm',
      },
      size: {
        [BUTTON_SIZES.SM]: 'px-3 py-1.5 text-sm rounded-lg',
        [BUTTON_SIZES.MD]: 'px-4 py-2 text-base rounded-lg',
        [BUTTON_SIZES.LG]: 'px-6 py-3 text-lg rounded-xl',
      },
    },
    defaultVariants: {
      variant: BUTTON_VARIANTS.PRIMARY,
      size: BUTTON_SIZES.MD,
    },
  }
);

export interface LSButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const LSButton = forwardRef<HTMLButtonElement, LSButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        className={buttonStyles({ variant, size, className })}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <SpinnerIcon className="animate-spin h-4 w-4" />}
        {!isLoading && leftIcon}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

export { LSButton };
