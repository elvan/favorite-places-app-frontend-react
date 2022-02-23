import { Card } from '../../shared/components/elements/Card';
import { Button } from '../../shared/components/forms/Button';
import { PlaceItem } from './PlaceItem';
import './PlaceList.css';

export const PlaceList = (props) => {
  if (props.places.length === 0) {
    return (
      <div className='place-list center'>
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <div>
            <Button to='/places-add'>Add new place</Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <>
      {props.places && props.places.length > 0 && (
        <ul className='place-list'>
          {props.places.map((place) => (
            <PlaceItem
              key={place.id}
              id={place.id}
              image={place.imageUrl}
              title={place.title}
              description={place.description}
              address={place.address}
              creator={place.creator}
              location={place.location}
            />
          ))}
        </ul>
      )}
    </>
  );
};
