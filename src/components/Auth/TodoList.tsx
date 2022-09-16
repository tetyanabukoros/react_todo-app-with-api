import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from './TodoItem';

interface Props {
  todos: Todo[];
  handleDeleteTodo: (todoId: number) => void;
  handleUpdateTodo: (todoId: number, data: Partial<Todo>) => void;
}

export const TodoList: React.FC<Props> = (props) => {
  const { todos, handleDeleteTodo, handleUpdateTodo } = props;

  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleUpdateTodo={handleUpdateTodo}
        />
      ))}
    </section>
  );
};
