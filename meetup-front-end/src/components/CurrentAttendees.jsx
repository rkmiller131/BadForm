import React from 'react';
import Attendee from './Attendee.jsx';

export default function CurrentAttendees({ data }) {
  return (
    <div className="attendees">
      <h2>Attendees</h2>
      <h3>Beginner</h3>
      {data ? data.filter((attendee) => (attendee.skillLevel === 'beginner')).map((pers) => (
        <Attendee
          name={`${pers.firstName} ${pers.lastName}`}
          key={pers.id}
        />
      )): null}
      <h3>Intermediate</h3>
      {data ? data.filter((attendee) => (attendee.skillLevel === 'intermediate')).map((pers) => (
        <Attendee
          name={`${pers.firstName} ${pers.lastName}`}
          key={pers.id}
        />
      )): null}
      <h3>Expert</h3>
      {data ? data.filter((attendee) => (attendee.skillLevel === 'expert')).map((pers) => (
        <Attendee
          name={`${pers.firstName} ${pers.lastName}`}
          key={pers.id}
        />
      )): null}
    </div>
  )
}