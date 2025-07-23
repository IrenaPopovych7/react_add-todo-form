import React from 'react';
import { TodoInfo } from '../TodoInfo';
import { Todo } from './../../types/Todo';
import { User } from './../../types/User';

type Props = {
  todos: Todo[];
  findUserById: (x: number) => User;
};

export const TodoList: React.FC<Props> = ({ todos, findUserById }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} user={findUserById(todo.userId)} />
      ))}
    </section>
  );
};
