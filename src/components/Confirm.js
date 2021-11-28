import React from 'react';

const Confirm = ({ formik, nextStep, prevStep }) => {
  const { errors, values } = formik;
  let {
    firstName: firstNameE,
    lastName: lastNameE,
    occupation: occupationE,
    age: ageE,
    address: addressE,
    password: passwordE,
  } = errors;
  const { address, age, email, firstName, lastName, occupation } = values;

  const handleNextClick = () => {
    if (
      !firstNameE &&
      !lastNameE &&
      !occupationE &&
      !ageE &&
      !addressE &&
      !passwordE
    ) {
      nextStep();
    }
  };
  const handleBackClick = () => {
    prevStep();
  };
  return (
    <div className='card'>
      <div className='card-header'>User Details</div>
      <div className='card-body'>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>User Email: {email}</p>
        <p>User Ocupation: {occupation}</p>
        <p>User Age: {age}</p>
        <p>User Address: {address}</p>
      </div>
      <div className='row'>
        <button
          disabled={!formik.isValid || formik.isSubmitting}
          type='submit'
          onClick={handleNextClick}
          className='btn btn-primary btn-block  my-3 col-3 offset-2 '
        >
          Submit
        </button>
        <button
          type='submit'
          onClick={handleBackClick}
          className='btn btn-light col-3 offset-2 my-3'
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Confirm;
