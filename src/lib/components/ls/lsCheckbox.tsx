'use client';

import { Checkbox } from '@base-ui-components/react/checkbox';
import { forwardRef } from 'react';
import CheckmarkIcon from '~/svgs/ls/checkmark.svg';
import { cn } from '~/utils/cn';

export interface LSCheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  helperText?: string;
  className?: string;
}

const checkboxStyles =
  'w-5 h-5 rounded border-2 border-border-primary bg-bg-secondary hover:border-accent-primary data-[state=checked]:bg-accent-primary data-[state=checked]:border-accent-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center';

const checkIconStyles = 'w-3 h-3 text-text-inverse';

const LSCheckbox = forwardRef<HTMLButtonElement, LSCheckboxProps>(
  (
    { checked, defaultChecked, onCheckedChange, disabled = false, label, helperText, className },
    ref
  ) => {
    return (
      <div className={cn('flex items-start gap-2', className)}>
        <Checkbox.Root
          ref={ref}
          checked={checked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          className={checkboxStyles}
        >
          <Checkbox.Indicator className={checkIconStyles}>
            <CheckmarkIcon aria-hidden="true" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        {(label || helperText) && (
          <div className="flex flex-col gap-0.5">
            {label && <span className="text-sm font-medium text-text-primary">{label}</span>}
            {helperText && <p className="text-xs text-text-secondary">{helperText}</p>}
          </div>
        )}
      </div>
    );
  }
);

export { LSCheckbox };
