import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

const mockTasks = [
  { id: 'todo-1', name: 'Eat', completed: false },
  { id: 'todo-2', name: 'Sleep', completed: false },
  { id: 'todo-3', name: 'Repeat', completed: false },
];

describe('App', () => {
  test('renders the main app heading', () => {
    render(<App tasks={mockTasks} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('TodoMatic');
  });

  test('renders correct number of tasks remaining', () => {
    render(<App tasks={mockTasks} />);
    expect(screen.getByText(/3 tasks remaining/i)).toBeInTheDocument();
  });

  test('renders with empty task list', () => {
    render(<App tasks={[]} />);
    expect(screen.getByText(/0 tasks remaining/i)).toBeInTheDocument();
  });
});
