import { render, screen } from '@testing-library/react';
import FilterButton from '../components/FilterButton';

describe('FilterButton', () => {
  test('renders filter button with correct name', () => {
    render(<FilterButton name="All" isPressed={true} setFilter={() => {}} />);
    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument();
  });
});
