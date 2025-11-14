import { Avatar } from '@base-ui-components/react/avatar';
import { forwardRef, type HTMLAttributes } from 'react';
import { AVATAR_SHAPES, AVATAR_SIZES } from '~/lib/constants/lsComponentConstants';
import { cva, type VariantProps } from '~/utils/styled';

const avatarStyles = cva(
  'inline-flex items-center justify-center overflow-hidden bg-bg-tertiary text-text-primary font-medium select-none',
  {
    variants: {
      shape: {
        [AVATAR_SHAPES.CIRCLE]: 'rounded-full',
        [AVATAR_SHAPES.SQUARE]: 'rounded-lg',
      },
      size: {
        [AVATAR_SIZES.XS]: 'w-6 h-6 text-xs',
        [AVATAR_SIZES.SM]: 'w-8 h-8 text-sm',
        [AVATAR_SIZES.MD]: 'w-10 h-10 text-base',
        [AVATAR_SIZES.LG]: 'w-12 h-12 text-lg',
        [AVATAR_SIZES.XL]: 'w-16 h-16 text-xl',
      },
    },
    defaultVariants: {
      shape: AVATAR_SHAPES.CIRCLE,
      size: AVATAR_SIZES.MD,
    },
  }
);

export interface LSAvatarProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarStyles> {
  src?: string;
  alt?: string;
  fallback?: string;
}

const imageStyles = 'w-full h-full object-cover';

const LSAvatar = forwardRef<HTMLSpanElement, LSAvatarProps>(
  ({ className, src, alt = '', fallback, size, shape, ...props }, ref) => {
    const getFallbackText = () => {
      if (fallback) {
        return fallback
          .split(' ')
          .map((word) => word[0])
          .join('')
          .toUpperCase()
          .slice(0, 2);
      }
      if (alt) {
        return alt
          .split(' ')
          .map((word) => word[0])
          .join('')
          .toUpperCase()
          .slice(0, 2);
      }
      return '?';
    };

    return (
      <Avatar.Root ref={ref} className={avatarStyles({ shape, size, className })} {...props}>
        {src && <Avatar.Image src={src} alt={alt} className={imageStyles} />}
        <Avatar.Fallback>{getFallbackText()}</Avatar.Fallback>
      </Avatar.Root>
    );
  }
);

export { LSAvatar };
