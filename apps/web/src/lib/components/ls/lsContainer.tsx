'use client';

import type { ReactNode } from 'react';
import { cn } from '~/utils/cn';
import { cva, type VariantProps } from '~/utils/styled';

const containerStyles = cva('mx-auto w-full', {
  variants: {
    maxWidth: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-full',
    },
    padding: {
      none: 'px-0',
      sm: 'px-4',
      md: 'px-6',
      lg: 'px-8',
      xl: 'px-12',
    },
  },
  defaultVariants: {
    maxWidth: 'xl',
    padding: 'md',
  },
});

export interface LSContainerProps extends VariantProps<typeof containerStyles> {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main' | 'aside';
}

const LSContainer = ({
  children,
  maxWidth,
  padding,
  className,
  as: Component = 'div',
}: LSContainerProps) => {
  return (
    <Component className={cn(containerStyles({ maxWidth, padding }), className)}>
      {children}
    </Component>
  );
};

export { LSContainer };
