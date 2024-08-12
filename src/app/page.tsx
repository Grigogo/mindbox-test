'use client'

import { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import TodoFilter from '../components/TodoFilter';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    if (window.confirm('Уверены?')) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="container flex flex-col items-center justify-center m-auto">
      <h1 className="text-4xl my-4">
        Todo App
      </h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <div className="w-full flex flex-wrap gap-2 mt-4 justify-between">
        <TodoFilter filter={filter} onFilterChange={setFilter} />
        <button
          className='p-2 rounded-lg bg-red-100 hover:bg-red-300 active:bg-red-400 text-gray-600'
          color="secondary"
          onClick={clearCompleted}
        >
          Очистить завершенные
        </button>
      </div>
    </div>
  );
};

export default Home;
