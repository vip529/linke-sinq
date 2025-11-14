'use client';

import { forwardRef, type TextareaHTMLAttributes } from 'react';
import {
  TEXTAREA_RESIZE,
  TEXTAREA_SIZES,
  TEXTAREA_STATES,
  type TextareaResize,
  type TextareaSize,
  type TextareaState,
} from '~/lib/constants/lsComponentConstants';
import { cn } from '~/utils/cn';

export interface LSTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: TextareaSize;
  state?: TextareaState;
  label?: string;
  helperText?: string;
  errorText?: string;
  resize?: TextareaResize;
}

const sizeStyles: Record<TextareaSize, string> = {
  [TEXTAREA_SIZES.SM]: 'px-3 py-1.5 text-sm min-h-[80px]',
  [TEXTAREA_SIZES.MD]: 'px-4 py-2 text-base min-h-[100px]',
  [TEXTAREA_SIZES.LG]: 'px-5 py-3 text-lg min-h-[120px]',
};

const stateStyles: Record<TextareaState, string> = {
  [TEXTAREA_STATES.DEFAULT]:
    'border-border-primary focus:border-accent-primary focus:ring-accent-primary/20',
  [TEXTAREA_STATES.ERROR]:
    'border-status-error focus:border-status-error focus:ring-status-error/20',
  [TEXTAREA_STATES.SUCCESS]:
    'border-status-success focus:border-status-success focus:ring-status-success/20',
};

const resizeStyles: Record<TextareaResize, string> = {
  [TEXTAREA_RESIZE.NONE]: 'resize-none',
  [TEXTAREA_RESIZE.VERTICAL]: 'resize-y',
  [TEXTAREA_RESIZE.HORIZONTAL]: 'resize-x',
  [TEXTAREA_RESIZE.BOTH]: 'resize',
};

const baseTextareaStyles =
  'w-full bg-bg-secondary text-text-primary rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-text-tertiary';

const LSTextarea = forwardRef<HTMLTextAreaElement, LSTextareaProps>(
  (
    {
      className,
      size = TEXTAREA_SIZES.MD,
      state = TEXTAREA_STATES.DEFAULT,
      label,
      helperText,
      errorText,
      resize = TEXTAREA_RESIZE.VERTICAL,
      id,
      ...props
    },
    ref
  ) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const showError = state === TEXTAREA_STATES.ERROR && errorText;
    const showHelper = !showError && helperText;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            baseTextareaStyles,
            sizeStyles[size],
            stateStyles[state],
            resizeStyles[resize],
            className
          )}
          {...props}
        />
        {showError && <p className="mt-1.5 text-sm text-status-error">{errorText}</p>}
        {showHelper && <p className="mt-1.5 text-sm text-text-secondary">{helperText}</p>}
      </div>
    );
  }
);

export { LSTextarea };
