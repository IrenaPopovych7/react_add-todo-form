type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type Props = {
  user: User | undefined;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    user && (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    )
  );
};
