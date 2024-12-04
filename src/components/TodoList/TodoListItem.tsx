import { useCallback } from 'react';
import { TodoItem } from '../../types';
import CheckBox from '../CheckBox';

interface TodoListItemProps {
  data: TodoItem;
  onStatusChange(id: string, status: boolean): void;
}
export default function TodoListItem(props: TodoListItemProps) {
  const { data, onStatusChange } = props;
  const contentClassName = `todo-list-item-content ${
    data.status ? 'todo-list-item-content-completed' : ''
  }`;
  const onClick = useCallback(() => {
    onStatusChange(data.id, !data.status);
  }, [data, onStatusChange]);
  return (
    <div className="todo-list-item" onClick={onClick}>
      <CheckBox checked={data.status} />
      <span className={contentClassName}>{data.content}</span>
    </div>
  );
}
