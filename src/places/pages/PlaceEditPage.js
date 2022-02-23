import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../shared/components/elements/Card';
import { Button } from '../../shared/components/forms/Button';
import { Input } from '../../shared/components/forms/Input';
import { useForm } from '../../shared/hooks/useForm';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { DUMMY_PLACES } from './PlaceDashboard';

export const PlaceEditPage = () => {
  // @ts-ignore
  const placeId = useParams().placeId;

  const [isLoading, setIsLoading] = useState(false);

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

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  const place = DUMMY_PLACES.find((place) => place.id === placeId);

  useEffect(() => {
    setIsLoading(true);
    if (place) {
      setFormData(
        {
          title: {
            value: place?.title,
            isValid: true,
          },
          description: {
            value: place?.description,
            isValid: true,
          },
          address: {
            value: place?.address,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, place]);

  if (isLoading) {
    return (
      <div className='center'>
        <Card>
          <h2>Loading...</h2>
        </Card>
      </div>
    );
  }

  if (!place) {
    return (
      <div className='center'>
        <Card>
          <h2>Place not found!</h2>
        </Card>
      </div>
    );
  }

  return (
    <>
      {formState.inputs.title.value &&
        formState.inputs.description.value &&
        formState.inputs.address.value && (
          <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
            <Input
              element='input'
              id='title'
              label='Title'
              type='text'
              errorText='Please enter a valid title'
              initialValue={formState.inputs.title.value}
              initialValid={formState.inputs.title.isValid}
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
              onInput={inputHandler}
            />
            <Input
              id='description'
              label='Description'
              type='textarea'
              errorText='Please enter a valid description'
              initialValue={formState.inputs.description.value}
              initialValid={formState.inputs.description.isValid}
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
              onInput={inputHandler}
            />
            <Input
              element='input'
              id='address'
              label='Address'
              type='text'
              errorText='Please enter a valid address'
              initialValue={formState.inputs.address.value}
              initialValid={formState.inputs.description.isValid}
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
              onInput={inputHandler}
            />
            <Button type='submit' disabled={!formState.isValid}>
              UPDATE PLACE
            </Button>
          </form>
        )}
    </>
  );
};
