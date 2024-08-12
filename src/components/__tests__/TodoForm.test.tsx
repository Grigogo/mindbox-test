import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoForm from '../TodoForm';

describe('TodoForm', () => {
  it('renders input & submit button', () => {
    render(<TodoForm onAdd={() => {}} />);

    expect(screen.getByLabelText(/new task/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument();
  });

  it('call onAdd with input text after submit', () => {
    const onAdd = jest.fn();
    render(<TodoForm onAdd={onAdd} />);

    const input = screen.getByLabelText(/new task/i);
    const button = screen.getByRole('button', { name: /add task/i });

    fireEvent.change(input, { target: { value: 'Test Task' } });

    fireEvent.click(button);

    expect(onAdd).toHaveBeenCalledWith('Test Task');
  });

  it('clear input after send', () => {
    const onAdd = jest.fn();
    render(<TodoForm onAdd={onAdd} />);

    const input = screen.getByLabelText(/new task/i);
    const button = screen.getByRole('button', { name: /add task/i });

    fireEvent.change(input, { target: { value: 'Test Task' } });
    fireEvent.click(button);

    expect(input).toHaveValue('');
  });
});
