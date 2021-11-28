import React from 'react';

const UserDetailForm = ({
  formik,
  Form,
  Field,
  ErrorMessage,
  nextStep,
  prevStep,
}) => {
  const { errors, touched, values } = formik;

  const {
    firstName: firstNameE,
    lastName: lastNameE,
    age: ageE,
    occupation: occupationE,
    address: addressE,
  } = errors;
  const {
    firstName: firstNameT,
    lastName: lastNameT,
    age: ageT,
    occupation: occupationT,
    address: addressT,
  } = touched;
  const { firstName, lastName, age, occupation, address } = values;

  const handleNextClick = () => {
    if (
      firstName &&
      lastName &&
      age &&
      occupation &&
      address &&
      !firstNameE &&
      !lastNameE &&
      !ageE &&
      !occupationE &&
      !addressE
    ) {
      nextStep();
    }
  };
  const handlePrevClick = () => {
    prevStep();
  };
  return (
    <Form>
      <div className='form-group'>
        <label htmlFor='firstName'>FirstName</label>
        <Field
          className={`form-control ${
            firstNameT && firstNameE ? 'is-invalid' : ''
          }`}
          type='text'
          name='firstName'
          id='firstName'
        />
        <ErrorMessage name='firstName'>
          {(msg) => {
            return <div className='invalid-feedback'>{msg}</div>;
          }}
        </ErrorMessage>
      </div>

      <div className='form-group'>
        <label htmlFor='lastName'>LastName</label>
        <Field
          className={`form-control ${
            lastNameT && lastNameE ? 'is-invalid' : ''
          }`}
          type='text'
          name='lastName'
          id='lastName'
        />
        <ErrorMessage name='lastName'>
          {(msg) => <div className='invalid-feedback'>{msg}</div>}
        </ErrorMessage>
      </div>

      <div className='form-group'>
        <label htmlFor='ocupation'>Occupation</label>
        <Field
          className={`form-control ${
            occupationE && occupationT ? 'is-invalid' : ''
          }`}
          type='text'
          name='occupation'
          id='occupation'
        />
        <ErrorMessage name='occupation'>
          {(msg) => <div className='invalid-feedback'>{msg}</div>}
        </ErrorMessage>
      </div>
      <div className='form-group'>
        <label htmlFor='address'>Address</label>
        <Field
          className={`form-control ${addressT && addressE ? 'is-invalid' : ''}`}
          type='text'
          name='address'
          id='address'
        />
        <ErrorMessage name='address'>
          {(msg) => <div className='invalid-feedback'>{msg}</div>}
        </ErrorMessage>
      </div>
      <div className='form-group'>
        <label htmlFor='age'>Age</label>
        <Field
          className={`form-control ${ageT && ageE ? 'is-invalid' : ''}`}
          type='number'
          name='age'
          id='age'
        />
        <ErrorMessage name='age'>
          {(msg) => <div className='invalid-feedback'>{msg}</div>}
        </ErrorMessage>
      </div>
      <div className='row'>
        <button
          type='button'
          onClick={handleNextClick}
          className='btn btn-primary btn-block col-3 offset-2 '
        >
          Continue
        </button>
        <button
          type='button'
          onClick={handlePrevClick}
          className='btn btn-light col-3 offset-2'
        >
          Back
        </button>
      </div>
    </Form>
  );
};
export default UserDetailForm;
