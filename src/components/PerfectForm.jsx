import React, { useState } from 'react';
import { useFormik } from 'formik';

export default function PerfectForm({ id, submitForm }) {
  const formik = useFormik({
    initialValues : {
      id: id,
      firstName: '',
      lastName: '',
      email: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      whichForm: 'Bad Form'
    },
    onSubmit: values => {
      // console.log('Form data ', values)
      submitForm(values)
    }
  });

  return (
    <div>
      This form is *chef's kiss*!
      <form onSubmit={formik.handleSubmit}>
        <h3>First Name: </h3> <input type="text" {...formik.getFieldProps('firstName')}/>
        <h3>Last Name: </h3> <input type="text" {...formik.getFieldProps('lastName')}/>
        <h3>Email: </h3> <input type="email" {...formik.getFieldProps('email')}/>
        <h3>Address Line 1: </h3> <input type="text" {...formik.getFieldProps('addressLine1')}/>
        <h3>Address Line 2: </h3> <input type="text" {...formik.getFieldProps('addressLine2')}/>
        <h3>City: </h3> <input type="text" {...formik.getFieldProps('city')}/>
        <h3>State: </h3> <input type="text" {...formik.getFieldProps('state')}/>
        <h3>Zip: </h3> <input type="text" {...formik.getFieldProps('zip')}/>
        <h3>Which Form Are You Using? </h3>
        <select {...formik.getFieldProps('whichForm')}>
          <option name="Bad Form">Bad Form</option>
          <option name="Good Form">Good Form</option>
          <option name="Perfect Form">Perfect Form</option>
        </select>
        <button>Submit Form</button>
      </form>
    </div>
  );
}