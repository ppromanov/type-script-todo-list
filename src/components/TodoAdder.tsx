import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type TodoAdderProps = {
  onAdd: (title: string) => void;
};

type FormValue = {
  title: string;
};

const TodoAdder: React.FC<TodoAdderProps> = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    if (data.title.trim()) onAdd(data.title);
    reset({});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('title')}
        type="text"
        placeholder="What need's to be done "
      />
    </form>
  );
};

export default TodoAdder;
