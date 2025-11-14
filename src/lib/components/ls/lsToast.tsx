'use client';

import { forwardRef, type ReactNode } from 'react';
import { TOAST_VARIANTS } from '~/lib/constants/lsComponentConstants';
import CloseIcon from '~/svgs/ls/close.svg';
import { cva, type VariantProps } from '~/utils/styled';

const toastStyles = cva(
  'flex items-start gap-3 p-4 rounded-lg border shadow-lg min-w-[300px] max-w-md animate-slide-up',
  {
    variants: {
      variant: {
        [TOAST_VARIANTS.DEFAULT]: 'bg-bg-elevated border-border-primary',
        [TOAST_VARIANTS.SUCCESS]: 'bg-status-success-muted border-status-success',
        [TOAST_VARIANTS.WARNING]: 'bg-status-warning-muted border-status-warning',
        [TOAST_VARIANTS.ERROR]: 'bg-status-error-muted border-status-error',
        [TOAST_VARIANTS.INFO]: 'bg-status-info-muted border-status-info',
      },
    },
    defaultVariants: {
      variant: TOAST_VARIANTS.DEFAULT,
    },
  }
);

export interface LSToastProps extends VariantProps<typeof toastStyles> {
  title?: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  onClose?: () => void;
  className?: string;
}

const closeButtonStyles =
  'ml-auto p-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-secondary/50 transition-colors duration-300';

const LSToast = forwardRef<HTMLDivElement, LSToastProps>(
  ({ title, description, variant, icon, action, onClose, className }, ref) => {
    return (
      <div ref={ref} className={toastStyles({ variant, className })}>
        {icon && <div className="flex-shrink-0 mt-0.5">{icon}</div>}
        <div className="flex-1 min-w-0">
          {title && <div className="font-semibold text-text-primary mb-1">{title}</div>}
          {description && <div className="text-sm text-text-secondary">{description}</div>}
          {action && <div className="mt-3">{action}</div>}
        </div>
        {onClose && (
          <button type="button" onClick={onClose} className={closeButtonStyles}>
            <CloseIcon className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  }
);

export { LSToast };
