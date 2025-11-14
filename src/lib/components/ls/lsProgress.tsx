import { Progress } from '@base-ui-components/react/progress';
import { forwardRef } from 'react';
import { PROGRESS_SIZES, PROGRESS_VARIANTS } from '~/lib/constants/lsComponentConstants';
import { cn } from '~/utils/cn';
import { cva, type VariantProps } from '~/utils/styled';

const trackStyles = cva('w-full bg-bg-tertiary rounded-full overflow-hidden', {
  variants: {
    size: {
      [PROGRESS_SIZES.SM]: 'h-1',
      [PROGRESS_SIZES.MD]: 'h-2',
      [PROGRESS_SIZES.LG]: 'h-3',
    },
  },
  defaultVariants: {
    size: PROGRESS_SIZES.MD,
  },
});

const indicatorStyles = cva('h-full transition-all duration-300 rounded-full', {
  variants: {
    variant: {
      [PROGRESS_VARIANTS.DEFAULT]: 'bg-accent-primary',
      [PROGRESS_VARIANTS.SUCCESS]: 'bg-status-success',
      [PROGRESS_VARIANTS.WARNING]: 'bg-status-warning',
      [PROGRESS_VARIANTS.ERROR]: 'bg-status-error',
    },
  },
  defaultVariants: {
    variant: PROGRESS_VARIANTS.DEFAULT,
  },
});

export interface LSProgressProps
  extends VariantProps<typeof indicatorStyles>,
    VariantProps<typeof trackStyles> {
  value?: number;
  max?: number;
  showLabel?: boolean;
  label?: string;
  className?: string;
}

const LSProgress = forwardRef<HTMLDivElement, LSProgressProps>(
  ({ value = 0, max = 100, variant, size, showLabel = false, label, className }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div ref={ref} className={cn('w-full', className)}>
        {(showLabel || label) && (
          <div className="flex items-center justify-between mb-2">
            {label && <span className="text-sm font-medium text-text-primary">{label}</span>}
            {showLabel && (
              <span className="text-sm text-text-secondary">{Math.round(percentage)}%</span>
            )}
          </div>
        )}
        <Progress.Root value={value} max={max}>
          <Progress.Track className={trackStyles({ size })}>
            <Progress.Indicator
              className={indicatorStyles({ variant })}
              style={{ width: `${percentage}%` }}
            />
          </Progress.Track>
        </Progress.Root>
      </div>
    );
  }
);

export { LSProgress };
