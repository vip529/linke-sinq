'use client';

import type { ReactNode } from 'react';
import InfoIcon from '~/svgs/ls/info.svg';
import { cn } from '~/utils/cn';
import { cva, type VariantProps } from '~/utils/styled';

const alertStyles = cva(
  'rounded-lg p-4 flex items-start gap-3 border transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-bg-secondary border-border-primary text-text-primary',
        success:
          'bg-status-success/10 border-status-success/30 text-status-success [&_svg]:text-status-success',
        warning:
          'bg-status-warning/10 border-status-warning/30 text-status-warning [&_svg]:text-status-warning',
        error:
          'bg-status-error/10 border-status-error/30 text-status-error [&_svg]:text-status-error',
        info: 'bg-accent-primary/10 border-accent-primary/30 text-accent-primary [&_svg]:text-accent-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const iconStyles = 'w-5 h-5 flex-shrink-0 mt-0.5';

export interface LSAlertProps extends VariantProps<typeof alertStyles> {
  title?: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  onClose?: () => void;
}

const LSAlert = ({ title, children, icon, variant, className, onClose }: LSAlertProps) => {
  return (
    <div className={cn(alertStyles({ variant }), className)} role="alert">
      <div className={iconStyles}>{icon || <InfoIcon aria-hidden="true" />}</div>
      <div className="flex-1 flex flex-col gap-1">
        {title && <h4 className="font-semibold text-sm">{title}</h4>}
        <div className="text-sm">{children}</div>
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="text-current hover:opacity-70 transition-opacity"
          aria-label="Close alert"
        >
          <svg
            className="w-5 h-5"
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
    </div>
  );
};

export { LSAlert };
