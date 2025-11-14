'use client';

import { Switch } from '@base-ui-components/react/switch';
import { forwardRef } from 'react';
import { SWITCH_SIZES, type SwitchSize } from '~/lib/constants/lsComponentConstants';
import { cn } from '~/utils/cn';

export interface LSSwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: SwitchSize;
  label?: string;
  helperText?: string;
  className?: string;
}

const switchSizeStyles: Record<SwitchSize, { track: string; thumb: string }> = {
  [SWITCH_SIZES.SM]: {
    track: 'w-8 h-4',
    thumb: 'w-3 h-3 data-[state=checked]:translate-x-4',
  },
  [SWITCH_SIZES.MD]: {
    track: 'w-11 h-6',
    thumb: 'w-5 h-5 data-[state=checked]:translate-x-5',
  },
  [SWITCH_SIZES.LG]: {
    track: 'w-14 h-7',
    thumb: 'w-6 h-6 data-[state=checked]:translate-x-7',
  },
};

const trackStyles =
  'relative inline-flex items-center rounded-full border-2 border-border-primary bg-bg-secondary data-[state=checked]:bg-accent-primary data-[state=checked]:border-accent-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary/20 disabled:opacity-50 disabled:cursor-not-allowed';

const thumbStyles = 'block rounded-full bg-text-inverse transition-transform duration-300';

const LSSwitch = forwardRef<HTMLButtonElement, LSSwitchProps>(
  (
    {
      checked,
      defaultChecked,
      onCheckedChange,
      disabled = false,
      size = SWITCH_SIZES.MD,
      label,
      helperText,
      className,
    },
    ref
  ) => {
    return (
      <div className={cn('flex items-start gap-3', className)}>
        <Switch.Root
          ref={ref}
          checked={checked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          className={cn(trackStyles, switchSizeStyles[size].track)}
        >
          <Switch.Thumb className={cn(thumbStyles, switchSizeStyles[size].thumb)} />
        </Switch.Root>
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

export { LSSwitch };
