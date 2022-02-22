import Input from '../../shared/components/forms/Input';
import './PlaceAddPage.css';

export const PlaceAddPage = () => {
  return (
    <form className='place-form'>
      <Input
        element='input'
        id='title'
        label='Title'
        type='text'
        placeholder='Place Title'
        validators={[]}
        onChange={() => {}}
      />
    </form>
  );
};
