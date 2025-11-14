'use client';

import { Tabs } from '@base-ui-components/react/tabs';
import { forwardRef, type ReactNode } from 'react';
import { TABS_VARIANTS, type TabsVariant } from '~/lib/constants/lsComponentConstants';
import { cn } from '~/utils/cn';

export interface LSTabItem {
  value: string;
  label: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface LSTabsProps {
  items: LSTabItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  variant?: TabsVariant;
  className?: string;
}

const listStyles: Record<TabsVariant, string> = {
  [TABS_VARIANTS.DEFAULT]:
    'inline-flex items-center gap-1 bg-bg-secondary p-1 rounded-lg border border-border-primary',
  [TABS_VARIANTS.PILLS]: 'inline-flex items-center gap-2',
};

const tabStyles: Record<TabsVariant, string> = {
  [TABS_VARIANTS.DEFAULT]:
    'px-4 py-2 text-sm font-medium text-text-secondary rounded-md transition-all duration-300 hover:text-text-primary data-[selected]:bg-bg-elevated data-[selected]:text-text-primary data-[selected]:shadow-sm data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',
  [TABS_VARIANTS.PILLS]:
    'px-4 py-2 text-sm font-medium text-text-secondary rounded-full transition-all duration-300 hover:text-text-primary hover:bg-bg-secondary data-[selected]:bg-accent-primary data-[selected]:text-text-inverse data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',
};

const panelStyles = 'mt-4 focus:outline-none data-[hidden]:hidden animate-fade-in';

const LSTabs = forwardRef<HTMLDivElement, LSTabsProps>(
  (
    { items, defaultValue, value, onValueChange, variant = TABS_VARIANTS.DEFAULT, className },
    ref
  ) => {
    const initialValue = value || defaultValue || items[0]?.value;

    return (
      <Tabs.Root
        ref={ref}
        defaultValue={initialValue}
        value={value}
        onValueChange={onValueChange}
        className={cn('w-full', className)}
      >
        <Tabs.List className={listStyles[variant]}>
          {items.map((item) => (
            <Tabs.Tab
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              className={tabStyles[variant]}
            >
              {item.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {items.map((item) => (
          <Tabs.Panel key={item.value} value={item.value} className={panelStyles}>
            {item.content}
          </Tabs.Panel>
        ))}
      </Tabs.Root>
    );
  }
);

export { LSTabs };
