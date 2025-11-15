'use client';

import type { ReactNode } from 'react';
import { cn } from '~/utils/cn';
import { cva, type VariantProps } from '~/utils/styled';

const stackStyles = cva('flex', {
  variants: {
    direction: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    spacing: {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
      '2xl': 'gap-12',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    wrap: {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
    },
  },
  defaultVariants: {
    direction: 'vertical',
    spacing: 'md',
    align: 'stretch',
    justify: 'start',
    wrap: 'nowrap',
  },
});

export interface LSStackProps extends VariantProps<typeof stackStyles> {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'ul' | 'ol';
}

const LSStack = ({
  children,
  direction,
  spacing,
  align,
  justify,
  wrap,
  className,
  as: Component = 'div',
}: LSStackProps) => {
  return (
    <Component className={cn(stackStyles({ direction, spacing, align, justify, wrap }), className)}>
      {children}
    </Component>
  );
};

export { LSStack };
