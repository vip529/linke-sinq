'use client';

import { type ChangeEvent, forwardRef, useState } from 'react';
import { cn } from '~/utils/cn';

export interface LSRadioOption {
  value: string;
  label: string;
  helperText?: string;
  disabled?: boolean;
}

export interface LSRadioProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  options: LSRadioOption[];
  disabled?: boolean;
  label?: string;
  helperText?: string;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  name?: string;
}

const radioGroupStyles = 'flex gap-3';
const radioWrapperStyles = 'flex items-start gap-2 cursor-pointer';

const LSRadio = forwardRef<HTMLDivElement, LSRadioProps>(
  (
    {
      value,
      defaultValue,
      onValueChange,
      options,
      disabled = false,
      label,
      helperText,
      className,
      orientation = 'vertical',
      name = 'radio-group',
    },
    ref
  ) => {
    const [selectedValue, setSelectedValue] = useState(value ?? defaultValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (!value) {
        setSelectedValue(newValue);
      }
      onValueChange?.(newValue);
    };

    const currentValue = value ?? selectedValue;

    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-2', className)}
        role="radiogroup"
        aria-label={label}
      >
        {label && <span className="text-sm font-medium text-text-primary">{label}</span>}
        {helperText && <p className="text-xs text-text-secondary mb-1">{helperText}</p>}
        <div
          className={cn(radioGroupStyles, orientation === 'horizontal' ? 'flex-row' : 'flex-col')}
        >
          {options.map((option) => {
            const isChecked = currentValue === option.value;
            const isDisabled = disabled || option.disabled;
            const radioId = `${name}-${option.value}`;

            return (
              <label
                key={option.value}
                htmlFor={radioId}
                className={cn(radioWrapperStyles, isDisabled && 'opacity-50 cursor-not-allowed')}
              >
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    id={radioId}
                    name={name}
                    value={option.value}
                    checked={isChecked}
                    onChange={handleChange}
                    disabled={isDisabled}
                    className="sr-only peer"
                  />
                  <div
                    className={cn(
                      'w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center',
                      'peer-focus:ring-2 peer-focus:ring-accent-primary/20',
                      isChecked
                        ? 'border-accent-primary bg-bg-secondary'
                        : 'border-border-primary bg-bg-secondary hover:border-accent-primary',
                      isDisabled && 'cursor-not-allowed'
                    )}
                  >
                    <div
                      className={cn(
                        'w-2.5 h-2.5 rounded-full bg-accent-primary transition-transform duration-200',
                        isChecked ? 'scale-100' : 'scale-0'
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-text-primary">{option.label}</span>
                  {option.helperText && (
                    <p className="text-xs text-text-secondary">{option.helperText}</p>
                  )}
                </div>
              </label>
            );
          })}
        </div>
      </div>
    );
  }
);

export { LSRadio };
