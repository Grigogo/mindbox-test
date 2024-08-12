'use client'

import { useState } from 'react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form className='w-full' onSubmit={handleSubmit}>
      <input type="text"
        name="Task"
        className='w-full border-2 rounded-lg p-2 mb-2'
        value={text}
        placeholder='Новая задача'
        onChange={(e) => setText(e.target.value)}
      />
      <button className='w-full bg-indigo-200 p-2 rounded-lg hover:bg-indigo-300 active:bg-indigo-400 transition-all' type="submit">
        Добавить
      </button>
    </form>
  );
};

export default TodoForm;
