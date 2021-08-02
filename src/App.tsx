import React, { useState } from 'react';
import Footer from './components/Footer';
import TodoAdder from './components/TodoAdder';
import TodoList from './components/TodoList';
import { ITodo } from './interfaces/todos';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string): void => {
    const newTodo: ITodo = {
      id: Date.now(),
      title: title,
      status: false,
    };
    setTodos((todos) => [newTodo, ...todos]);
  };

  const toggleHandler = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: !todo.status,
          };
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const deleteCompleted = (status: boolean) => {
    setTodos((todos) => todos.filter((todo) => todo.status !== status));
  };

  return (
    <div className="App">
      <h1>TypeScript To Do List</h1>
      <TodoAdder onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
      <Footer deleteCompleted={deleteCompleted} />
    </div>
  );
};

export default App;
