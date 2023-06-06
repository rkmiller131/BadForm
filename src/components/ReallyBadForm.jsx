import React, { useState } from 'react';

export default function BadForm({ id, submitForm }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [add1, setAdd1] = useState('');
  const [add2, setAdd2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [form, setForm] = useState('');

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleAdd1(e) {
    setAdd1(e.target.value);
  }

  function handleAdd2(e) {
    setAdd2(e.target.value);
  }

  function handleCity(e) {
    setCity(e.target.value);
  }

  function handleState(e) {
    setState(e.target.value);
  }

  function handleZip(e) {
    setZip(Number(e.target.value));
  }

  function handleForm(e) {
    setForm(e.target.value);
  }

  function handleSubmit(e) {
    const data = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      addressLine1: add1,
      addressLine2: add2,
      city: city,
      state: state,
      zip: zip,
      whichForm: form
    }
    submitForm(data);
  }
  return (
    <div>
      This form is.... D:!
      <form onSubmit={handleSubmit}>
        <h3>First Name: </h3> <input type="text" value={firstName} onChange={handleFirstName}/>
        <h3>Last Name: </h3> <input type="text" value={lastName} onChange={handleLastName}/>
        <h3>Email: </h3> <input type="email" value={email} onChange={handleEmail}/>
        <h3>Address Line 1: </h3> <input type="text" value={add1} onChange={handleAdd1}/>
        <h3>Address Line 2: </h3> <input type="text" value={add2} onChange={handleAdd2}/>
        <h3>City: </h3> <input type="text" value={city} onChange={handleCity}/>
        <h3>State: </h3> <input type="text" value={state} onChange={handleState}/>
        <h3>Zip: </h3> <input type="text" value={zip} onChange={handleZip}/>
        <h3>Which Form Are You Using? </h3>
        <select onChange={handleForm}>
          <option value="Bad Form">Bad Form</option>
          <option value="Good Form">Good Form</option>
          <option value="Perfect Form">Perfect Form</option>
        </select>
        <button onSubmit={handleSubmit}>Submit Form</button>
      </form>
    </div>
  );
}