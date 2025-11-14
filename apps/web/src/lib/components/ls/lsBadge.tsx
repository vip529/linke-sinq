import { forwardRef, type HTMLAttributes } from 'react';
import { BADGE_SIZES, BADGE_VARIANTS } from '~/lib/constants/lsComponentConstants';
import { cva, type VariantProps } from '~/utils/styled';

const badgeStyles = cva(
  'inline-flex items-center gap-1.5 font-medium rounded-full whitespace-nowrap',
  {
    variants: {
      variant: {
        [BADGE_VARIANTS.DEFAULT]: 'bg-bg-tertiary text-text-primary border border-border-primary',
        [BADGE_VARIANTS.PRIMARY]: 'bg-accent-primary text-text-inverse',
        [BADGE_VARIANTS.SUCCESS]: 'bg-status-success text-text-inverse',
        [BADGE_VARIANTS.WARNING]: 'bg-status-warning text-text-inverse',
        [BADGE_VARIANTS.ERROR]: 'bg-status-error text-text-inverse',
        [BADGE_VARIANTS.INFO]: 'bg-status-info text-text-inverse',
      },
      size: {
        [BADGE_SIZES.SM]: 'px-2 py-0.5 text-xs',
        [BADGE_SIZES.MD]: 'px-2.5 py-1 text-sm',
        [BADGE_SIZES.LG]: 'px-3 py-1.5 text-base',
      },
    },
    defaultVariants: {
      variant: BADGE_VARIANTS.DEFAULT,
      size: BADGE_SIZES.MD,
    },
  }
);

export interface LSBadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeStyles> {
  dot?: boolean;
}

const LSBadge = forwardRef<HTMLSpanElement, LSBadgeProps>(
  ({ className, variant, size, dot = false, children, ...props }, ref) => {
    return (
      <span ref={ref} className={badgeStyles({ variant, size, className })} {...props}>
        {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
        {children}
      </span>
    );
  }
);

export { LSBadge };
