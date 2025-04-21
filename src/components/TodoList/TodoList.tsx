import React from 'react';
import { TodoInfo } from '../TodoInfo';

type TODO = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  user?: User;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type Props = {
  todos: TODO[];
  findUserById: (x: number) => User;
};

export const TodoList: React.FC<Props> = ({ todos, findUserById }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo todo={todo} findUserById={findUserById} key={todo.id} />
      ))}
    </section>
  );
};
