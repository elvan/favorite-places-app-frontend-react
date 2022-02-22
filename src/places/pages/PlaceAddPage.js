import { Input } from '../../shared/components/forms/Input';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import './PlaceAddPage.css';

export const PlaceAddPage = () => {
  return (
    <form className='place-form'>
      <Input
        element='input'
        id='title'
        label='Title'
        type='text'
        errorText='Please enter a valid title'
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        onChange={() => {}}
      />
    </form>
  );
};
