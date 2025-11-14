import { forwardRef, type HTMLAttributes } from 'react';
import {
  DIVIDER_ORIENTATIONS,
  type DividerOrientation,
} from '~/lib/constants/lsComponentConstants';
import { cn } from '~/utils/cn';

export interface LSDividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: DividerOrientation;
  label?: string;
}

const orientationStyles: Record<DividerOrientation, string> = {
  [DIVIDER_ORIENTATIONS.HORIZONTAL]: 'w-full h-px',
  [DIVIDER_ORIENTATIONS.VERTICAL]: 'w-px h-full',
};

const baseStyles = 'bg-border-primary border-none';

const LSDivider = forwardRef<HTMLHRElement, LSDividerProps>(
  ({ className, orientation = DIVIDER_ORIENTATIONS.HORIZONTAL, label, ...props }, ref) => {
    if (label && orientation === DIVIDER_ORIENTATIONS.HORIZONTAL) {
      return (
        <div className={cn('flex items-center gap-4 w-full', className)}>
          <hr className={cn(baseStyles, 'flex-1 h-px')} />
          <span className="text-sm text-text-secondary whitespace-nowrap">{label}</span>
          <hr className={cn(baseStyles, 'flex-1 h-px')} />
        </div>
      );
    }

    return (
      <hr
        ref={ref}
        className={cn(baseStyles, orientationStyles[orientation], className)}
        {...props}
      />
    );
  }
);

export { LSDivider };
