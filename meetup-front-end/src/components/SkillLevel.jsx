import React from 'react';

export default function SkillLevel({ handleChange }) {
  return (
    <div>
      Choose Your Skill Level: {' '}
      <select name="skillLevel" onChange={(e) => (handleChange(e))}>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Expert">Expert</option>
      </select>
    </div>
  );
}