'use client';

import { Collapsible } from '@base-ui-components/react/collapsible';
import { type ReactNode, useState } from 'react';
import { cn } from '~/utils/cn';

export interface LSAccordionItem {
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
}

export interface LSAccordionProps {
  items: LSAccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

const accordionItemStyles = 'border border-border-primary rounded-lg overflow-hidden';
const accordionTriggerStyles =
  'flex items-center justify-between w-full px-4 py-3 text-left font-medium text-text-primary bg-bg-secondary hover:bg-bg-tertiary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary/20';
const accordionContentStyles = 'px-4 py-3 text-text-secondary text-sm bg-bg-primary';
const iconStyles = 'w-4 h-4 transition-transform duration-200';

const LSAccordion = ({ items, allowMultiple = false, className }: LSAccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<number>>(
    new Set(items.map((item, index) => (item.defaultOpen ? index : -1)).filter((i) => i !== -1))
  );

  const handleToggle = (index: number) => {
    setOpenItems((prev) => {
      const newSet = allowMultiple ? new Set(prev) : new Set<number>();
      if (prev.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {items.map((item, index) => {
        const isOpen = openItems.has(index);
        const itemKey = `accordion-item-${index}`;

        return (
          <div key={itemKey} className={accordionItemStyles}>
            <Collapsible.Root open={isOpen} onOpenChange={() => handleToggle(index)}>
              <Collapsible.Trigger className={accordionTriggerStyles}>
                <span>{item.title}</span>
                <svg
                  className={cn(iconStyles, isOpen && 'rotate-180')}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Collapsible.Trigger>
              <Collapsible.Panel className={accordionContentStyles}>
                {item.content}
              </Collapsible.Panel>
            </Collapsible.Root>
          </div>
        );
      })}
    </div>
  );
};

export { LSAccordion };
