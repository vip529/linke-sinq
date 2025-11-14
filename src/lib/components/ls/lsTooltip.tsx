'use client';

import { Tooltip } from '@base-ui-components/react/tooltip';
import { forwardRef, type ReactNode } from 'react';
import {
  TOOLTIP_ALIGN,
  TOOLTIP_SIDES,
  type TooltipAlign,
  type TooltipSide,
} from '~/lib/constants/lsComponentConstants';
import { cn } from '~/utils/cn';

export interface LSTooltipProps {
  content: ReactNode;
  children: ReactNode;
  side?: TooltipSide;
  align?: TooltipAlign;
  delay?: number;
  showArrow?: boolean;
  className?: string;
}

const popupStyles =
  'bg-bg-elevated border border-border-primary rounded-lg shadow-lg px-3 py-2 text-sm text-text-primary z-tooltip max-w-xs data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out';

const arrowStyles = 'fill-bg-elevated';

const LSTooltip = forwardRef<HTMLDivElement, LSTooltipProps>(
  (
    {
      content,
      children,
      side = TOOLTIP_SIDES.TOP,
      align = TOOLTIP_ALIGN.CENTER,
      delay = 200,
      showArrow = true,
      className,
    },
    ref
  ) => {
    return (
      <Tooltip.Root delay={delay}>
        <Tooltip.Trigger>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner side={side} align={align}>
            <Tooltip.Popup ref={ref} className={cn(popupStyles, className)}>
              {showArrow && <Tooltip.Arrow className={arrowStyles} />}
              {content}
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    );
  }
);

export { LSTooltip };
