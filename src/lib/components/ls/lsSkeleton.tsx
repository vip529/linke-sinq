import { forwardRef, type HTMLAttributes } from 'react';
import { SKELETON_VARIANTS, type SkeletonVariant } from '~/lib/constants/lsComponentConstants';
import { cn } from '~/utils/cn';

export interface LSSkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  animate?: boolean;
}

const variantStyles: Record<SkeletonVariant, string> = {
  [SKELETON_VARIANTS.TEXT]: 'rounded h-4',
  [SKELETON_VARIANTS.CIRCULAR]: 'rounded-full',
  [SKELETON_VARIANTS.RECTANGULAR]: 'rounded-lg',
};

const baseStyles = 'bg-bg-tertiary';

const pulseAnimation = 'animate-pulse';

const LSSkeleton = forwardRef<HTMLDivElement, LSSkeletonProps>(
  (
    {
      className,
      variant = SKELETON_VARIANTS.RECTANGULAR,
      width,
      height,
      animate = true,
      style,
      ...props
    },
    ref
  ) => {
    const computedStyle = {
      ...style,
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], animate && pulseAnimation, className)}
        style={computedStyle}
        {...props}
      />
    );
  }
);

export { LSSkeleton };
