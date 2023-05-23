import React, { useState, useEffect } from "react";
import axios from 'axios';
import CurrentAttendees from './CurrentAttendees.jsx';
import AttendeeForm from './AttendeeForm.jsx';


const App = () => {
  const [attenders, setAttenders] = useState([]);
  const [id, setId] = useState(6);

  // populate attendees list on first load
  useEffect(() => {
    axios.get('http://localhost:3000/attendees')
      .then((results) => {
        setAttenders(results.data);
      })
  }, [])

  function addToDB(obj) {
    setId(id + 1);
    axios.post('http://localhost:3000/attendees', obj)
      .then((response) => {
        const registered = attenders.slice();
        registered.push(response.data);
        setAttenders(registered);
      })
      .catch((err) => {console.log('There was an error in posting to the JSON server ', err)});
  }
  return (
    <div className="main">
      <div className="attendee-form">
        <h2>Register Attendee</h2>
        <AttendeeForm addToDB={addToDB} id={id} />
        <CurrentAttendees data={attenders}/>
      </div>
    </div>
  );
};

export default App;
