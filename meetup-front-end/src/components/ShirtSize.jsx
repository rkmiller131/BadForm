import React from 'react';

export default function ShirtSize ({ handleChange }) {
  return (
    <label>
      Select T-Shirt Size:{' '}
      <select name="shirt" onChange={(e) => (handleChange(e))}>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
    </label>
  );
}