'use client';

import { Menu } from '@base-ui-components/react/menu';
import type { ReactNode } from 'react';
import { cn } from '~/utils/cn';

export interface LSDropdownItem {
  label: string;
  value: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  destructive?: boolean;
}

export interface LSDropdownProps {
  trigger: ReactNode;
  items: LSDropdownItem[];
  align?: 'start' | 'center' | 'end';
  className?: string;
}

const menuStyles =
  'min-w-[12rem] rounded-lg bg-bg-elevated border border-border-primary shadow-lg p-1 z-50 focus:outline-none animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2';

const menuItemStyles =
  'flex items-center gap-2 px-3 py-2 text-sm rounded-md cursor-pointer transition-colors focus:outline-none focus:bg-bg-tertiary hover:bg-bg-tertiary data-[highlighted]:bg-bg-tertiary disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

const LSDropdown = ({ trigger, items, align = 'start', className }: LSDropdownProps) => {
  return (
    <Menu.Root>
      <Menu.Trigger className={cn('focus:outline-none', className)}>{trigger}</Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner sideOffset={4} align={align}>
          <Menu.Popup className={menuStyles}>
            {items.map((item) => (
              <Menu.Item
                key={item.value}
                onClick={item.onClick}
                disabled={item.disabled}
                className={cn(
                  menuItemStyles,
                  item.destructive && 'text-status-error hover:bg-status-error/10'
                )}
              >
                {item.icon && <span className="flex-shrink-0 w-4 h-4">{item.icon}</span>}
                <span className="flex-1">{item.label}</span>
              </Menu.Item>
            ))}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
};

export { LSDropdown };
