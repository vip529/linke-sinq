import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { CARD_PADDING, CARD_VARIANTS } from '~/lib/constants/lsComponentConstants';
import { cn } from '~/utils/cn';
import { cva, type VariantProps } from '~/utils/styled';

const cardStyles = cva('rounded-lg transition-all duration-300', {
  variants: {
    variant: {
      [CARD_VARIANTS.DEFAULT]: 'bg-bg-secondary border border-border-primary',
      [CARD_VARIANTS.ELEVATED]: 'bg-bg-elevated shadow-md',
      [CARD_VARIANTS.OUTLINED]: 'bg-transparent border-2 border-border-primary',
    },
    padding: {
      [CARD_PADDING.NONE]: 'p-0',
      [CARD_PADDING.SM]: 'p-4',
      [CARD_PADDING.MD]: 'p-6',
      [CARD_PADDING.LG]: 'p-8',
    },
  },
  defaultVariants: {
    variant: CARD_VARIANTS.DEFAULT,
    padding: CARD_PADDING.MD,
  },
});

export interface LSCardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardStyles> {
  hoverable?: boolean;
}

const LSCard = forwardRef<HTMLDivElement, LSCardProps>(
  ({ className, variant, padding, hoverable = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardStyles({ variant, padding, className }),
          hoverable && 'hover:shadow-lg hover:border-border-secondary cursor-pointer'
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export interface LSCardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  action?: ReactNode;
}

const LSCardHeader = forwardRef<HTMLDivElement, LSCardHeaderProps>(
  ({ className, title, description, action, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex items-start justify-between mb-4', className)} {...props}>
        <div className="flex-1">
          {title && <h3 className="text-lg font-semibold text-text-primary">{title}</h3>}
          {description && <p className="text-sm text-text-secondary mt-1">{description}</p>}
          {children}
        </div>
        {action && <div className="ml-4">{action}</div>}
      </div>
    );
  }
);

export interface LSCardContentProps extends HTMLAttributes<HTMLDivElement> {}

const LSCardContent = forwardRef<HTMLDivElement, LSCardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('', className)} {...props}>
        {children}
      </div>
    );
  }
);

export interface LSCardFooterProps extends HTMLAttributes<HTMLDivElement> {}

const LSCardFooter = forwardRef<HTMLDivElement, LSCardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-end gap-2 mt-4 pt-4 border-t border-border-primary',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export { LSCard, LSCardHeader, LSCardContent, LSCardFooter };
