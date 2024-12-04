import React, { useCallback, useState } from 'react';
import { TodoItem } from '../../types';
import './index.css';
import InputBox from '../InputBox';
import TodoList from '../TodoList';
import Divider from '../Divider';

export default function Content() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const addTodoItem = useCallback(
    (item: TodoItem) => {
      setTodoList([...todoList, item]);
    },
    [todoList, setTodoList]
  );

  const removeTodoItem = useCallback(
    (id: string) => {
      setTodoList(todoList.filter((item) => item.id !== id));
    },
    [todoList, setTodoList]
  );

  const updateItemStatus = useCallback(
    (id: string, checked: boolean) => {
      setTodoList(
        todoList.map((item) => ({
          ...item,
          status: id === item.id ? checked : item.status
        }))
      );
    },
    [todoList, setTodoList]
  );

  const completeAll = useCallback(() => {
    setTodoList(todoList.map((item) => ({ ...item, status: true })));
  }, [todoList, setTodoList]);

  const clearCompleted = useCallback(() => {
    setTodoList(todoList.filter(({ status }) => !status));
  }, [todoList, setTodoList]);

  return (
    <div className="content">
      <div className="title">TODO</div>
      <InputBox onTodoItemAdd={addTodoItem} />
      <Divider height={36} />
      <TodoList
        onItemStatusChange={updateItemStatus}
        onAllCompleted={completeAll}
        data={todoList}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
}
