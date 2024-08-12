import cn from 'clsx'

interface TodoFilterProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, onFilterChange }) => {
  return (
    <div className='flex gap-2'>
      <button
        onClick={() => onFilterChange('all')}
        className={cn('p-4 bg-indigo-50 rounded-lg', filter === 'all' && 'bg-indigo-400')}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('active')}
        className={cn('p-4 bg-indigo-50 rounded-lg', filter === 'active' && 'bg-indigo-400')}
      >
        Active
      </button>
      <button
        onClick={() => onFilterChange('completed')}
        className={cn('p-4 bg-indigo-50 rounded-lg', filter === 'completed' && 'bg-indigo-400')}
      >
        Завершенные
      </button>
    </div>
  );
};

export default TodoFilter;
