import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

const mockTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Learn TypeScript', completed: true },
];

describe('TodoList', () => {
  it('renders todo items', () => {
    render(<TodoList todos={mockTodos} onToggle={() => {}} onDelete={() => {}} />);

    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
    expect(screen.getByText(/learn typescript/i)).toBeInTheDocument();
  });

  it('calls onToggle when checkbox is clicked', () => {
    const onToggle = jest.fn();
    render(<TodoList todos={mockTodos} onToggle={onToggle} onDelete={() => {}} />);

    const checkbox = screen.getAllByRole('checkbox')[0];

    fireEvent.click(checkbox);

    expect(onToggle).toHaveBeenCalledWith(mockTodos[0].id);
  });

  it('calls onDelete when delete button is clicked', () => {
    const onDelete = jest.fn();
    render(<TodoList todos={mockTodos} onToggle={() => {}} onDelete={onDelete} />);

    const deleteButton = screen.getAllByRole('button', { name: /delete/i })[0];

    fireEvent.click(deleteButton);

    expect(onDelete).toHaveBeenCalledWith(mockTodos[0].id);
  });
});
