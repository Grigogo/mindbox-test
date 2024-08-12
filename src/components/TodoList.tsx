import { List, ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <List className='w-full'>
      {todos.map((todo) => (
        <ListItem className='border-b-[1px]' key={todo.id} sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <ListItemText
            primary={todo.text}
            sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          />
          <IconButton edge="end" aria-label="delete" onClick={() => onDelete(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
