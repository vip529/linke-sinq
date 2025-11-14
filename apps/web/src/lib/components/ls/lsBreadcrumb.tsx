'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '~/utils/cn';

export interface LSBreadcrumbItem {
  label: string;
  href?: string;
  icon?: ReactNode;
}

export interface LSBreadcrumbProps {
  items: LSBreadcrumbItem[];
  separator?: ReactNode;
  className?: string;
}

const defaultSeparator = (
  <svg
    className="w-4 h-4 text-text-secondary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const LSBreadcrumb = ({ items, separator = defaultSeparator, className }: LSBreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-2', className)}>
      <ol className="flex items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const itemKey = `breadcrumb-${item.href || item.label}-${index}`;
          const content = (
            <span className="flex items-center gap-1.5">
              {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
              <span>{item.label}</span>
            </span>
          );

          return (
            <li key={itemKey} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {content}
                </Link>
              ) : (
                <span
                  className={cn(
                    'text-sm',
                    isLast ? 'text-text-primary font-medium' : 'text-text-secondary'
                  )}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {content}
                </span>
              )}
              {!isLast && <span aria-hidden="true">{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export { LSBreadcrumb };
