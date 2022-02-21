import './UserList.css';
import { UserListItem } from './UserListItem';

export const UserList = ({ users }) => {
  if (users.length === 0) {
    return (
      <div className='center'>
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <UserListItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.places.length}
            />
          ))}
        </ul>
      )}
    </>
  );
};
