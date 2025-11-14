'use client';

import { Popover } from '@base-ui-components/react/popover';
import { forwardRef, type ReactNode } from 'react';
import {
  POPOVER_ALIGN,
  POPOVER_SIDES,
  type PopoverAlign,
  type PopoverSide,
} from '~/lib/constants/lsComponentConstants';
import { cn } from '~/utils/cn';

export interface LSPopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  side?: PopoverSide;
  align?: PopoverAlign;
  withBackdrop?: boolean;
  className?: string;
}

const popupStyles =
  'bg-bg-elevated border border-border-primary rounded-lg shadow-lg p-4 z-popover max-w-sm data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out';

const backdropStyles = 'fixed inset-0 z-overlay';

const LSPopover = forwardRef<HTMLDivElement, LSPopoverProps>(
  (
    {
      trigger,
      children,
      side = POPOVER_SIDES.BOTTOM,
      align = POPOVER_ALIGN.CENTER,
      withBackdrop = false,
      className,
    },
    ref
  ) => {
    return (
      <Popover.Root>
        <Popover.Trigger>{trigger}</Popover.Trigger>
        <Popover.Portal>
          {withBackdrop && <Popover.Backdrop className={backdropStyles} />}
          <Popover.Positioner side={side} align={align}>
            <Popover.Popup ref={ref} className={cn(popupStyles, className)}>
              {children}
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>
    );
  }
);

export { LSPopover };
