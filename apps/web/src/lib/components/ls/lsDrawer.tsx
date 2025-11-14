'use client';

import { Dialog } from '@base-ui-components/react/dialog';
import { forwardRef, type ReactNode } from 'react';
import {
  DRAWER_SIDES,
  DRAWER_SIZES,
  type DrawerSide,
  type DrawerSize,
} from '~/lib/constants/lsComponentConstants';
import CloseIcon from '~/svgs/ls/close.svg';
import { cn } from '~/utils/cn';

export interface LSDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: ReactNode;
  side?: DrawerSide;
  size?: DrawerSize;
  showCloseButton?: boolean;
  className?: string;
}

const getDrawerSizeStyles = (side: DrawerSide, size: DrawerSize): string => {
  const sizeMap: Record<DrawerSide, Record<DrawerSize, string>> = {
    [DRAWER_SIDES.LEFT]: {
      [DRAWER_SIZES.SM]: 'w-64',
      [DRAWER_SIZES.MD]: 'w-80',
      [DRAWER_SIZES.LG]: 'w-96',
      [DRAWER_SIZES.FULL]: 'w-full',
    },
    [DRAWER_SIDES.RIGHT]: {
      [DRAWER_SIZES.SM]: 'w-64',
      [DRAWER_SIZES.MD]: 'w-80',
      [DRAWER_SIZES.LG]: 'w-96',
      [DRAWER_SIZES.FULL]: 'w-full',
    },
    [DRAWER_SIDES.TOP]: {
      [DRAWER_SIZES.SM]: 'h-64',
      [DRAWER_SIZES.MD]: 'h-80',
      [DRAWER_SIZES.LG]: 'h-96',
      [DRAWER_SIZES.FULL]: 'h-full',
    },
    [DRAWER_SIDES.BOTTOM]: {
      [DRAWER_SIZES.SM]: 'h-64',
      [DRAWER_SIZES.MD]: 'h-80',
      [DRAWER_SIZES.LG]: 'h-96',
      [DRAWER_SIZES.FULL]: 'h-full',
    },
  };
  return sizeMap[side][size];
};

const sideStyles: Record<DrawerSide, string> = {
  [DRAWER_SIDES.LEFT]:
    'left-0 top-0 h-full data-[state=open]:animate-slide-right data-[state=closed]:animate-slide-left',
  [DRAWER_SIDES.RIGHT]:
    'right-0 top-0 h-full data-[state=open]:animate-slide-left data-[state=closed]:animate-slide-right',
  [DRAWER_SIDES.TOP]:
    'top-0 left-0 w-full data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up',
  [DRAWER_SIDES.BOTTOM]:
    'bottom-0 left-0 w-full data-[state=open]:animate-slide-up data-[state=closed]:animate-slide-down',
};

const backdropStyles =
  'fixed inset-0 bg-bg-primary/80 backdrop-blur-sm z-modal data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out';

const popupStyles =
  'fixed bg-bg-elevated border border-border-primary shadow-xl z-modal p-6 overflow-y-auto';

const closeButtonStyles =
  'absolute top-4 right-4 p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-all duration-300';

const LSDrawer = forwardRef<HTMLDivElement, LSDrawerProps>(
  (
    {
      open,
      onOpenChange,
      title,
      description,
      children,
      side = DRAWER_SIDES.RIGHT,
      size = DRAWER_SIZES.MD,
      showCloseButton = true,
      className,
    },
    ref
  ) => {
    return (
      <Dialog.Root open={open} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          <Dialog.Backdrop className={backdropStyles} />
          <Dialog.Popup
            ref={ref}
            className={cn(
              popupStyles,
              sideStyles[side],
              getDrawerSizeStyles(side, size),
              className
            )}
          >
            {showCloseButton && (
              <Dialog.Close className={closeButtonStyles}>
                <CloseIcon className="w-5 h-5" />
              </Dialog.Close>
            )}
            {title && (
              <Dialog.Title className="text-xl font-semibold text-text-primary mb-2">
                {title}
              </Dialog.Title>
            )}
            {description && (
              <Dialog.Description className="text-sm text-text-secondary mb-4">
                {description}
              </Dialog.Description>
            )}
            <div>{children}</div>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }
);

export { LSDrawer };
