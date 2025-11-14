'use client';

import { Dialog } from '@base-ui-components/react/dialog';
import { forwardRef, type ReactNode } from 'react';
import { DIALOG_SIZES } from '~/lib/constants/lsComponentConstants';
import CloseIcon from '~/svgs/ls/close.svg';
import { cva, type VariantProps } from '~/utils/styled';

const dialogStyles = cva(
  'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-bg-elevated border border-border-primary rounded-xl shadow-xl z-modal p-6 data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out',
  {
    variants: {
      size: {
        [DIALOG_SIZES.SM]: 'max-w-sm',
        [DIALOG_SIZES.MD]: 'max-w-md',
        [DIALOG_SIZES.LG]: 'max-w-lg',
        [DIALOG_SIZES.XL]: 'max-w-xl',
        [DIALOG_SIZES.FULL]: 'max-w-full mx-4',
      },
    },
    defaultVariants: {
      size: DIALOG_SIZES.MD,
    },
  }
);

export interface LSDialogProps extends VariantProps<typeof dialogStyles> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: ReactNode;
  showCloseButton?: boolean;
  className?: string;
}

const backdropStyles =
  'fixed inset-0 bg-bg-primary/80 backdrop-blur-sm z-modal data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out';

const closeButtonStyles =
  'absolute top-4 right-4 p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-all duration-300';

const LSDialog = forwardRef<HTMLDivElement, LSDialogProps>(
  (
    { open, onOpenChange, title, description, children, size, showCloseButton = true, className },
    ref
  ) => {
    return (
      <Dialog.Root open={open} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          <Dialog.Backdrop className={backdropStyles} />
          <Dialog.Popup ref={ref} className={dialogStyles({ size, className })}>
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

export { LSDialog };
