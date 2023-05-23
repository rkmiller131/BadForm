import React, { useState } from 'react';
import ShirtSize from './ShirtSize.jsx';
import SkillLevel from './SkillLevel.jsx';

export default function AttendeeForm({ addToDB, id }) {
  const [details, setDetails] = useState({
    id: id,
    firstName: '',
    lastName: '',
    email: '',
    shirt: 'XS',
    skillLevel: 'beginner',
  })

  function handleChange(e) {
    const { name, value } = e.target;
     setDetails((details) => (
      {...details, [name]: value}
     ))
  }

  function handleSubmit() {
    addToDB(details);
  }

  return (
    <form type="submit" onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
        />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          onChange={handleChange}
        />
      </label>
      <ShirtSize handleChange={handleChange} />
      <SkillLevel handleChange={handleChange} />
        <button>REGISTER</button>
      </label>
    </form>
  )
}