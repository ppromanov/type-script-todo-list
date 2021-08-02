import React from 'react';
import { ITodo } from '../interfaces/todos';
import TodoItem from './TodoItem';

type TodoListArr = {
  todos: ITodo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

const TodoList: React.FC<TodoListArr> = ({ todos, onRemove, onToggle }) => {
  return (
    <ul>
      {todos.map((todo: ITodo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
