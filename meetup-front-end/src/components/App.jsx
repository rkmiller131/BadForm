import React, { useState } from "react";
import {attendees} from '../db.js';
import CurrentAttendees from './CurrentAttendees.jsx';
import AttendeeForm from './AttendeeForm.jsx';


const App = () => {
  const [attenders, setAttenders] = useState(attendees);
  const [id, setId] = useState(6);

  function addToDB(arrayOfObj) {
    const registered = attenders.concat(arrayOfObj);
    setAttenders(...attenders, registered);
    console.log('DID THIS UPDATE MAIN OBJ?? ', attenders);
  }
  return (
    <div className="main">
      <h1>JS MEETUP</h1>
      <h2>Meetup Frontend</h2>
      <div className="attendee-form">
        <h2>Register Attendee</h2>
        <AttendeeForm addToDB={addToDB} id={id} setId={setId} />
        <CurrentAttendees data={attenders}/>
      </div>
    </div>
  );
};

export default App;
