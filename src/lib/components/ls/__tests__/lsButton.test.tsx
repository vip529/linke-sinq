import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { LSButton } from '../lsButton';

describe('LSButton', () => {
  it('should render with default props', () => {
    render(<LSButton>Click me</LSButton>);
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
  });

  it('should render with primary variant by default', () => {
    render(<LSButton>Primary</LSButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-accent-primary');
  });

  it('should render with secondary variant', () => {
    render(<LSButton variant="secondary">Secondary</LSButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-bg-secondary');
  });

  it('should render with ghost variant', () => {
    render(<LSButton variant="ghost">Ghost</LSButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-transparent');
  });

  it('should render with danger variant', () => {
    render(<LSButton variant="danger">Danger</LSButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-status-error');
  });

  it('should render with different sizes', () => {
    const { rerender } = render(<LSButton size="sm">Small</LSButton>);
    expect(screen.getByRole('button')).toHaveClass('px-3');

    rerender(<LSButton size="md">Medium</LSButton>);
    expect(screen.getByRole('button')).toHaveClass('px-4');

    rerender(<LSButton size="lg">Large</LSButton>);
    expect(screen.getByRole('button')).toHaveClass('px-6');
  });

  it('should call onClick when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<LSButton onClick={handleClick}>Click me</LSButton>);

    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('should be disabled when disabled prop is true', () => {
    render(<LSButton disabled>Disabled</LSButton>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should be disabled when isLoading is true', () => {
    render(<LSButton isLoading>Loading</LSButton>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should show loading spinner when isLoading is true', () => {
    render(<LSButton isLoading>Loading</LSButton>);
    const button = screen.getByRole('button');
    const spinner = button.querySelector('svg.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('should render left icon', () => {
    render(<LSButton leftIcon={<span data-testid="left-icon">←</span>}>With Icon</LSButton>);
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });

  it('should render right icon', () => {
    render(<LSButton rightIcon={<span data-testid="right-icon">→</span>}>With Icon</LSButton>);
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('should not render icons when isLoading is true', () => {
    render(
      <LSButton
        isLoading
        leftIcon={<span data-testid="left-icon">←</span>}
        rightIcon={<span data-testid="right-icon">→</span>}
      >
        Loading
      </LSButton>
    );
    expect(screen.queryByTestId('left-icon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();
  });

  it('should merge custom className with default styles', () => {
    render(<LSButton className="custom-class">Custom</LSButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('bg-accent-primary');
  });
});
