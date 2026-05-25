import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../components/Form';

describe('Form', () => {
  test('renders add task input', () => {
    render(<Form addTask={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('calls addTask when form is submitted', async () => {
    const mockAddTask = vi.fn();
    render(<Form addTask={mockAddTask} />);
    await userEvent.type(screen.getByRole('textbox'), 'New Task');
    await userEvent.click(screen.getByRole('button', { name: /add/i }));
    expect(mockAddTask).toHaveBeenCalled();
  });
});
