import classNames from 'classnames';
import React from 'react';
import cross from '../img/cross.webp';
import { ITodo } from '../interfaces/todos';

type Todo = {
  todo: ITodo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

const TodoItem: React.FC<Todo> = ({ todo, onToggle, onRemove }) => {
  return (
    <li className={classNames({ completed: todo.status })}>
      {' '}
      <input
        type="checkbox"
        checked={todo.status}
        onChange={() => onToggle(todo.id)}
      />
      {todo.title}
      <img
        style={{ height: '20px', width: '20px' }}
        src={cross}
        onClick={() => onRemove(todo.id)}
        alt="Delete"
      />
    </li>
  );
};

export default TodoItem;
