'use client';

import { Dialog } from '@base-ui-components/react/dialog';
import { type ReactNode, useEffect, useState } from 'react';
import { cn } from '~/utils/cn';

export interface LSCommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  keywords?: string[];
  onSelect: () => void;
  group?: string;
}

export interface LSCommandPaletteProps {
  items: LSCommandItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  placeholder?: string;
  className?: string;
}

const dialogBackdropStyles = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in-0';
const dialogContentStyles =
  'fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-2xl bg-bg-elevated rounded-xl shadow-2xl border border-border-primary z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-top-4';
const inputStyles =
  'w-full px-4 py-4 text-base bg-transparent border-b border-border-primary text-text-primary placeholder:text-text-secondary focus:outline-none';
const itemsContainerStyles = 'max-h-96 overflow-y-auto p-2';
const itemStyles =
  'flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors hover:bg-bg-secondary data-[highlighted]:bg-bg-secondary';
const groupLabelStyles =
  'px-4 py-2 text-xs font-semibold text-text-secondary uppercase tracking-wide';

const LSCommandPalette = ({
  items,
  open,
  onOpenChange,
  placeholder = 'Search commands...',
  className,
}: LSCommandPaletteProps) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredItems = items.filter((item) => {
    const searchLower = search.toLowerCase();
    return (
      item.label.toLowerCase().includes(searchLower) ||
      item.description?.toLowerCase().includes(searchLower) ||
      item.keywords?.some((keyword) => keyword.toLowerCase().includes(searchLower))
    );
  });

  const groupedItems = filteredItems.reduce(
    (acc, item) => {
      const group = item.group || 'Other';
      if (!acc[group]) acc[group] = [];
      acc[group].push(item);
      return acc;
    },
    {} as Record<string, LSCommandItem[]>
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: Reset selected index when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selectedItem = filteredItems[selectedIndex];
        if (selectedItem) {
          selectedItem.onSelect();
          onOpenChange(false);
          setSearch('');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, selectedIndex, filteredItems, onOpenChange]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className={dialogBackdropStyles} />
        <Dialog.Popup className={cn(dialogContentStyles, className)}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={placeholder}
            className={inputStyles}
            // biome-ignore lint/a11y/noAutofocus: Command palette needs autofocus for UX
            autoFocus
          />
          <div className={itemsContainerStyles}>
            {filteredItems.length === 0 ? (
              <div className="px-4 py-8 text-center text-text-secondary">No results found</div>
            ) : (
              Object.entries(groupedItems).map(([group, groupItems]) => (
                <div key={group} className="mb-2 last:mb-0">
                  <div className={groupLabelStyles}>{group}</div>
                  {groupItems.map((item) => {
                    const globalIndex = filteredItems.indexOf(item);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          item.onSelect();
                          onOpenChange(false);
                          setSearch('');
                        }}
                        className={cn(itemStyles, 'w-full text-left')}
                        data-highlighted={globalIndex === selectedIndex ? '' : undefined}
                      >
                        {item.icon && <span className="flex-shrink-0 w-5 h-5">{item.icon}</span>}
                        <div className="flex-1">
                          <div className="font-medium text-text-primary">{item.label}</div>
                          {item.description && (
                            <div className="text-xs text-text-secondary mt-0.5">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { LSCommandPalette };
