import React from 'react';

export default function SkillLevel({ handleChange }) {
  return (
    <div>
      Choose Your Skill Level: {' '}
      <select name="skillLevel" onChange={(e) => (handleChange(e))}>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="expert">Expert</option>
      </select>
    </div>
  );
}