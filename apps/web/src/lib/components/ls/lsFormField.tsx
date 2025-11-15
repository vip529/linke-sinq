'use client';

import type { ReactNode } from 'react';
import { cn } from '~/utils/cn';

export interface LSFormFieldProps {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
  htmlFor?: string;
}

const LSFormField = ({
  label,
  helperText,
  error,
  required = false,
  children,
  className,
  htmlFor,
}: LSFormFieldProps) => {
  const hasError = Boolean(error);

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="text-sm font-medium text-text-primary flex items-center gap-1"
        >
          {label}
          {required && <span className="text-status-error">*</span>}
        </label>
      )}
      {children}
      {helperText && !hasError && <p className="text-xs text-text-secondary">{helperText}</p>}
      {hasError && <p className="text-xs text-status-error">{error}</p>}
    </div>
  );
};

export { LSFormField };
