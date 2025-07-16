import usersFromServer from '../../api/users.json';

export const UserInfo = ({ userId }) => {
  const user = usersFromServer.find(usr => usr.id === userId);

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
