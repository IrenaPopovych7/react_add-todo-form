import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo, user }) => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2>{todo.title}</h2>
    <UserInfo user={user} />{' '}
  </article>
);
