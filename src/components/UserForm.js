import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CredentialForm from './CredentialForm';
import UserDetailForm from './UserDetailForm';
import Success from './Success';
import Confirm from './Confirm';

const UserForm = () => {
  const [step, setStep] = useState(1);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    occupation: '',
    age: '',
    address: '',
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().min(3).max(100).required('First Name is Required'),
    lastName: Yup.string().min(3).max(100).required('Last Name is Required'),
    email: Yup.string()
      .min(3)
      .max(100)
      .email('Imvalid email format')
      .required('email is required'),
    password: Yup.string().min(3).max(100).required('Password is required'),
    //   .matches(
    //     /^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].**$/,
    //     'Need one special character'
    //   ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'password must match')
      .required('confirm password is required'),
    occupation: Yup.string().min(3).max(100).required('occupation is required'),
    age: Yup.number().min(18).max(150).required('Age is Required'),
    address: Yup.string().min(18).max(150).required('Address is Required'),
  });
  const onSubmit = (values, submitProps) => {
    console.log('formData submitted');
    submitProps.resetFields();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        switch (step) {
          case 1:
            return (
              <CredentialForm
                formik={formik}
                Form={Form}
                Field={Field}
                ErrorMessage={ErrorMessage}
                nextStep={nextStep}
              />
            );
          case 2:
            return (
              <UserDetailForm
                formik={formik}
                Form={Form}
                Field={Field}
                ErrorMessage={ErrorMessage}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            );
          case 3:
            return (
              <Confirm
                formik={formik}
                ErrorMessage={ErrorMessage}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            );
          case 4:
            return <Success formik={formik} />;
          default:
            console.log('This is multistep form');
        }
      }}
    </Formik>
  );
};

export default UserForm;
