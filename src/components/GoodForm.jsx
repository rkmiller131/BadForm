import React, { useState } from 'react';

export default function GoodForm({ id, submitForm }) {
  const [details, setDetails] = useState({
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
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setDetails((details) => (
      {...details, [name]: value}
    ));
  }
  function handleSubmit() {
    submitForm(details);
  }

  return (
    <div>
      This form isn't half bad!
      <form onSubmit={handleSubmit}>
        <h3>First Name: </h3> <input type="text" name="firstName" onChange={handleChange}/>
        <h3>Last Name: </h3> <input type="text" name="lastName" onChange={handleChange}/>
        <h3>Email: </h3> <input type="email" name="email" onChange={handleChange}/>
        <h3>Address Line 1: </h3> <input type="text" name="addressLine1" onChange={handleChange}/>
        <h3>Address Line 2: </h3> <input type="text" name="addressLine2" onChange={handleChange}/>
        <h3>City: </h3> <input type="text" name="city" onChange={handleChange}/>
        <h3>State: </h3> <input type="text" name="state" onChange={handleChange}/>
        <h3>Zip: </h3> <input type="text" name="zip" onChange={handleChange}/>
        <h3>Which Form Are You Using? </h3>
        <select onChange={handleChange}>
          <option name="Bad Form">Bad Form</option>
          <option name="Good Form">Good Form</option>
          <option name="Perfect Form">Perfect Form</option>
        </select>
        <button onSubmit={handleSubmit}>Submit Form</button>
      </form>
    </div>
  );
}