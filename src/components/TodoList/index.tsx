import { useMemo } from 'react';
import { TodoItem } from '../../types';
import './index.css';
import TodoListItem from './TodoListItem';

interface TodoListProps {
  data: TodoItem[];
  onItemStatusChange(id: string, status: boolean): void;
  onAllCompleted(): void;
  onClearCompleted(): void;
}
export default function TodoList(props: TodoListProps) {
  const { data, onAllCompleted, onClearCompleted, onItemStatusChange } = props;
  const leftCount = useMemo(
    () => data.filter(({ status }) => !status).length,
    [data]
  );
  return (
    <div className="todo-list">
      <div className="todo-list-content">
        {data.map((item) => (
          <TodoListItem
            data={item}
            onStatusChange={onItemStatusChange}
            key={item.id}
          />
        ))}
      </div>
      <div className="todo-list-footer">
        <div>{`${leftCount} items left`}</div>
        <div onClick={onAllCompleted}>All Active Completed</div>
        <div onClick={onClearCompleted}>Clear Completed</div>
      </div>
    </div>
  );
}
