import { useParams } from 'react-router-dom';
import { Button } from '../../shared/components/forms/Button';
import { Input } from '../../shared/components/forms/Input';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { DUMMY_PLACES } from './PlaceDashboard';

export const PlaceEditPage = () => {
  // @ts-ignore
  const placeId = useParams().placeId;

  const place = DUMMY_PLACES.find((place) => place.id === placeId);

  if (!place) {
    return (
      <div className='center'>
        <h2>Place not found!</h2>
      </div>
    );
  }

  return (
    <form className='place-form'>
      <Input
        element='input'
        id='title'
        label='Title'
        type='text'
        errorText='Please enter a valid title'
        value={place.title}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        onInput={() => {}}
        valid={true}
      />
      <Input
        id='description'
        label='Description'
        type='textarea'
        errorText='Please enter a valid description'
        value={place.description}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        onInput={() => {}}
        valid={true}
      />
      <Input
        element='input'
        id='address'
        label='Address'
        type='text'
        errorText='Please enter a valid address'
        value={place.address}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        onInput={() => {}}
        valid={true}
      />
      <Button type='submit' disabled={false}>
        UPDATE PLACE
      </Button>
    </form>
  );
};
