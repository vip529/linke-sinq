'use client';

import type { ReactNode } from 'react';
import { cn } from '~/utils/cn';
import { cva, type VariantProps } from '~/utils/styled';

const tagStyles = cva(
  'inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-bg-secondary text-text-primary hover:bg-bg-tertiary',
        primary: 'bg-accent-primary/10 text-accent-primary hover:bg-accent-primary/20',
        success: 'bg-status-success/10 text-status-success hover:bg-status-success/20',
        warning: 'bg-status-warning/10 text-status-warning hover:bg-status-warning/20',
        error: 'bg-status-error/10 text-status-error hover:bg-status-error/20',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface LSTagProps extends VariantProps<typeof tagStyles> {
  children: ReactNode;
  leftIcon?: ReactNode;
  onRemove?: () => void;
  className?: string;
  onClick?: () => void;
}

const LSTag = ({ children, leftIcon, onRemove, variant, size, className, onClick }: LSTagProps) => {
  const isInteractive = Boolean(onClick);
  const isRemovable = Boolean(onRemove);

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: Span can be interactive when onClick is provided
    <span
      className={cn(
        tagStyles({ variant, size }),
        (isInteractive || isRemovable) && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={
        isInteractive
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
    >
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {isRemovable && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="flex-shrink-0 hover:opacity-70 transition-opacity focus:outline-none"
          aria-label="Remove tag"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

export { LSTag };
