import axios from 'axios';
import { Form, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

const url = 'https://www.course-api.com/cocktails-newsletter';

//Function Action
export const action = async ({ request }) => {
  //get data from the inputs into an key-value pair
  const formData = await request.formData(); // FormData{ append:..., delete:... }
  const formDataObj = Object.fromEntries(formData); // {name: 'john', lastName: 'smith'...}

  //API POST
  try {
    const response = await axios.post(url, formDataObj);
    toast.success(response.data.msg);
    return redirect('/');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Newsletter() {
  const navigation = useNavigation();
  let isSubmitting = navigation.state === 'submitting';

  //RETURN
  return (
    <Form className='form' method='POST'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      {/* name */}
      <div className='form-now' style={{ marginBottom: '1rem' }}>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input'
          name='name'
          id='name'
          defaultValue='john'
        />
      </div>
      {/* lastName */}
      <div className='form-now' style={{ marginBottom: '1rem' }}>
        <label htmlFor='lastName' className='form-label'>
          lastName
        </label>
        <input
          type='text'
          className='form-input'
          name='lastName'
          id='lastName'
          required
          defaultValue='smith'
        />
      </div>
      {/* email */}
      <div className='form-now' style={{ marginBottom: '1rem' }}>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='text'
          className='form-input'
          name='email'
          id='email'
          defaultValue='test@test.com'
        />
      </div>
      {/* BUTTON */}
      <button
        type='submit'
        className='btn btn-block'
        style={{ marginTop: '0.5rem' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'submitting' : 'submit'}
      </button>
    </Form>
  );
}

export default Newsletter;
