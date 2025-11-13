import { describe, expect, it } from 'vitest';
import { cn } from '../cn';

describe('cn utility', () => {
  it('should merge class names', () => {
    expect(cn('text-red-500', 'bg-blue-500')).toBe('text-red-500 bg-blue-500');
  });

  it('should handle conditional classes', () => {
    expect(cn('base', true && 'active', false && 'inactive')).toBe('base active');
  });

  it('should merge Tailwind classes correctly', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
  });

  it('should handle undefined and null', () => {
    expect(cn('base', undefined, null, 'extra')).toBe('base extra');
  });

  it('should handle arrays', () => {
    expect(cn(['base', 'active'], 'extra')).toBe('base active extra');
  });
});
