import { FormEventHandler, useCallback, useState } from 'react';
import CheckBox from '../CheckBox';
import './index.css';
import { TodoItem } from '../../types';

interface InputBoxProps {
  onTodoItemAdd(item: TodoItem): void;
}
export default function InputBox(props: InputBoxProps) {
  const { onTodoItemAdd } = props;
  const [content, setContent] = useState('');
  const add = useCallback(() => {
    const item: TodoItem = {
      content,
      status: false,
      id: Date.now().toString()
    };
    onTodoItemAdd(item);
    setContent('');
  }, [setContent, content, onTodoItemAdd]);
  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
      if (!content) {
        return;
      }
      add();
    },
    [add, content]
  );
  const onInput = useCallback<FormEventHandler<HTMLInputElement>>(
    (e) => {
      const value = (e.target as HTMLInputElement).value;
      setContent(value);
    },
    [setContent]
  );
  return (
    <form className="input-box" onSubmit={onSubmit} action="">
      <CheckBox checked={false} />
      <input
        type="text"
        placeholder="Create a new todo ..."
        className="input-box-input"
        value={content}
        onInput={onInput}
      />
      {content ? <span className="input-box-button" onClick={add}>Add</span> : null}
    </form>
  );
}
