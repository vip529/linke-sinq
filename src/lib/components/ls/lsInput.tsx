'use client';

import { Input } from '@base-ui-components/react/input';
import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { INPUT_SIZES, INPUT_STATES } from '~/lib/constants/lsComponentConstants';
import { cn } from '~/utils/cn';
import { cva, type VariantProps } from '~/utils/styled';

const inputStyles = cva(
  'w-full bg-bg-secondary text-text-primary rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-text-tertiary',
  {
    variants: {
      state: {
        [INPUT_STATES.DEFAULT]:
          'border-border-primary focus:border-accent-primary focus:ring-accent-primary/20',
        [INPUT_STATES.ERROR]:
          'border-status-error focus:border-status-error focus:ring-status-error/20',
        [INPUT_STATES.SUCCESS]:
          'border-status-success focus:border-status-success focus:ring-status-success/20',
      },
      size: {
        [INPUT_SIZES.SM]: 'px-3 py-1.5 text-sm',
        [INPUT_SIZES.MD]: 'px-4 py-2 text-base',
        [INPUT_SIZES.LG]: 'px-5 py-3 text-lg',
      },
    },
    defaultVariants: {
      state: INPUT_STATES.DEFAULT,
      size: INPUT_SIZES.MD,
    },
  }
);

export interface LSInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputStyles> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
  helperText?: string;
  errorText?: string;
}

const LSInput = forwardRef<HTMLInputElement, LSInputProps>(
  (
    { className, size, state, leftIcon, rightIcon, label, helperText, errorText, id, ...props },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const showError = state === INPUT_STATES.ERROR && errorText;
    const showHelper = !showError && helperText;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-text-primary mb-1.5">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">
              {leftIcon}
            </div>
          )}
          <Input
            ref={ref}
            id={inputId}
            className={cn(
              inputStyles({ state, size, className }),
              leftIcon && 'pl-10',
              rightIcon && 'pr-10'
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary">
              {rightIcon}
            </div>
          )}
        </div>
        {showError && <p className="mt-1.5 text-sm text-status-error">{errorText}</p>}
        {showHelper && <p className="mt-1.5 text-sm text-text-secondary">{helperText}</p>}
      </div>
    );
  }
);

export { LSInput };
