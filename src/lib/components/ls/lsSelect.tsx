'use client';

import { Select } from '@base-ui-components/react/select';
import { forwardRef } from 'react';
import { SELECT_SIZES, type SelectSize } from '~/lib/constants/lsComponentConstants';
import { cn } from '~/utils/cn';

export interface LSSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface LSSelectProps {
  options: LSSelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string | null) => void;
  size?: SelectSize;
  placeholder?: string;
  label?: string;
  helperText?: string;
  errorText?: string;
  disabled?: boolean;
  className?: string;
}

const sizeStyles: Record<SelectSize, string> = {
  [SELECT_SIZES.SM]: 'px-3 py-1.5 text-sm',
  [SELECT_SIZES.MD]: 'px-4 py-2 text-base',
  [SELECT_SIZES.LG]: 'px-5 py-3 text-lg',
};

const triggerStyles =
  'w-full bg-bg-secondary text-text-primary rounded-lg border border-border-primary hover:border-border-secondary focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-between';

const popupStyles =
  'bg-bg-elevated border border-border-primary rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto z-dropdown';

const optionStyles =
  'px-4 py-2 cursor-pointer hover:bg-bg-secondary transition-colors duration-200 data-[highlighted]:bg-bg-secondary data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed';

const LSSelect = forwardRef<HTMLButtonElement, LSSelectProps>(
  (
    {
      options,
      value,
      defaultValue,
      onChange,
      size = SELECT_SIZES.MD,
      placeholder = 'Select an option',
      label,
      helperText,
      errorText,
      disabled = false,
      className,
    },
    ref
  ) => {
    const selectId = label?.toLowerCase().replace(/\s+/g, '-');
    const showError = errorText;
    const showHelper = !showError && helperText;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={selectId} className="block text-sm font-medium text-text-primary mb-1.5">
            {label}
          </label>
        )}
        <Select.Root
          value={value}
          defaultValue={defaultValue}
          onValueChange={onChange}
          disabled={disabled}
        >
          <Select.Trigger
            ref={ref}
            id={selectId}
            className={cn(triggerStyles, sizeStyles[size], className)}
          >
            <Select.Value>{placeholder}</Select.Value>
          </Select.Trigger>
          <Select.Portal>
            <Select.Positioner>
              <Select.Popup className={popupStyles}>
                {options.map((option) => (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={optionStyles}
                  >
                    {option.label}
                  </Select.Item>
                ))}
              </Select.Popup>
            </Select.Positioner>
          </Select.Portal>
        </Select.Root>
        {showError && <p className="mt-1.5 text-sm text-status-error">{errorText}</p>}
        {showHelper && <p className="mt-1.5 text-sm text-text-secondary">{helperText}</p>}
      </div>
    );
  }
);

export { LSSelect };
