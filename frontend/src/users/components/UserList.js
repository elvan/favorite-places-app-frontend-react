import { UserItem } from './UserItem';
import './UserList.css';

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
        <ul className='users-list'>
          {users.map((user) => (
            <UserItem
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
