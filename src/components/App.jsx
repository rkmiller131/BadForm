import React, { useState, useEffect } from "react";
import axios from 'axios';
import BadForm from './BadForm.jsx';


const App = () => {
  const [id, setId] = useState(2);

  function submitForm(form) {
    console.log('form is ', form);
    axios.post('http://localhost:3000/forms', form)
      .then(() => {
        setId(id + 1);
      })
      .catch((err) => console.log('There was an error inserting into db', err));
  }
  return (
    <>
    <BadForm id={id} submitForm={submitForm} />
    {/* <GoodForm id={id} submitForm={submitForm} /> */}
    </>
  );
};

export default App;
