import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoFilter from '../TodoFilter';

describe('TodoFilter', () => {
  it('renders filter buttons', () => {
    render(<TodoFilter filter="all" onFilterChange={() => {}} />);

    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /active/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /completed/i })).toBeInTheDocument();
  });

  it('call onFilterChange when filter button clicked', () => {
    const onFilterChange = jest.fn();
    render(<TodoFilter filter="all" onFilterChange={onFilterChange} />);

    fireEvent.click(screen.getByRole('button', { name: /active/i }));

    expect(onFilterChange).toHaveBeenCalledWith('active');
  });
});
