import { useEffect, useRef, useState } from 'react';
import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchForm';

function SearchForm({ searchTerm }) {
  //Navigation
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  //RETURN
  return (
    <Wrapper>
      <Form action='' className='form'>
        <input
          type='search'
          name='search'
          className='form-input'
          defaultValue={searchTerm}
        />
        <button type='submit' className='btn' defaultValue={isSubmitting}>
          {isSubmitting ? 'submitting' : 'submit'}
        </button>
      </Form>
    </Wrapper>
  );
}
export default SearchForm;
