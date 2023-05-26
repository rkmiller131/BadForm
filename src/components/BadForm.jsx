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

  function handleSubmit(e) {
    e.preventDefault();
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
      Fix Your Forms!
      <form onSubmit={handleSubmit}>
        <h3>First Name: </h3> <input type="text" value={firstName} onChange={(e) => (setFirstName(e.target.value))}/>
        <h3>Last Name: </h3> <input type="text" value={lastName} onChange={(e) => (setLastName(e.target.value))}/>
        <h3>Email: </h3> <input type="text" value={email} onChange={(e) => (setEmail(e.target.value))}/>
        <h3>Address Line 1: </h3> <input type="text" value={add1} onChange={(e) => (setAdd1(e.target.value))}/>
        <h3>Address Line 2: </h3> <input type="text" value={add2} onChange={(e) => (setAdd2(e.target.value))}/>
        <h3>City: </h3> <input type="text" value={city} onChange={(e) => (setCity(e.target.value))}/>
        <h3>State: </h3> <input type="text" value={state} onChange={(e) => (setState(e.target.value))}/>
        <h3>Zip: </h3> <input type="text" value={zip} onChange={(e) => (setZip(e.target.value))}/>
        <h3>Which Form Are You Using?: </h3>
        <select onChange={(e) => (setForm(e.target.value))}>
          <option value="Bad Form">Bad Form</option>
          <option value="Good Form">Good Form</option>
          <option value="Perfect Form">Perfect Form</option>
        </select>
        <button onSubmit={handleSubmit}>Submit Form</button>
      </form>
    </div>
  );
}