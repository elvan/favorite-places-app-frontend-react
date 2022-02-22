import { Button } from '../../shared/components/forms/Button';
import { Input } from '../../shared/components/forms/Input';
import { useForm } from '../../shared/hooks/useForm';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import './PlaceAddPage.css';

export const PlaceAddPage = () => {
  const [formState, inputHandler, setFormData, clearForm] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      address: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <form className='place-form' onSubmit={placeSubmitHandler}>
      <Input
        element='input'
        id='title'
        label='Title'
        type='text'
        errorText='Please enter a valid title'
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
      />
      <Input
        id='description'
        label='Description'
        type='textarea'
        errorText='Please enter a valid description'
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
      />
      <Input
        element='input'
        id='address'
        label='Address'
        type='text'
        errorText='Please enter a valid address'
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
      />
      <Button type='submit' disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};
