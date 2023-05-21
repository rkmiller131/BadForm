import React, { useState } from 'react';
import ShirtSize from './ShirtSize.jsx';

export default function AttendeeForm({ addToDB, id, setId }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [shirt, setShirt] = useState('');
  const [skill, setSkill] = useState('');

  function handleSubmit() {
    const registration = [{
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      shirt: shirt,
      skillLevel: skill,
    }]
    addToDB(registration);
    setId(id + 1);
  }
  return (
    <form type="submit" onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={(e) => (setFirstName(e.target.value))}/>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={(e) => (setLastName(e.target.value))}/>
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => (setEmail(e.target.value))}/>
      </label>
      <ShirtSize setShirt={setShirt} />
        <button>REGISTER</button>
      </label>
    </form>
  )
}