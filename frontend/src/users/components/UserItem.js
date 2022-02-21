import { Link } from 'react-router-dom';
import { Avatar } from '../../shared/components/elements/Avatar';
import { Card } from '../../shared/components/elements/Card';
import './UserItem.css';

export const UserItem = ({ id, name, image, placeCount }) => {
  return (
    <li className='user-item'>
      <Card className='user-item__content'>
        <Link to={`/users/${id}`}>
          <div className='user-item__image'>
            <Avatar name={name} image={image} alt={name} />
          </div>
          <div className='user-item__info'>
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};
