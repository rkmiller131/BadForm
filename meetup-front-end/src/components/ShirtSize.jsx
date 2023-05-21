import React, { useState, useEffect } from 'react';

export default function ShirtSize ({ setShirt }) {
  const [selectedBtn, setSelectedBtn] = useState(0);

  useEffect(() => {
    setShirt(selectedBtn);
  }, [selectedBtn])

  function handleClick(e) {
    const { value } = e.target;
    setSelectedBtn(value);
  }
  // need to make states unique
  return (
    <>
      <label>
        XS
        <input type="radio" value="XS" defaultChecked={selectedBtn === 'XS'} onChange={(e) => { handleClick(e) }} />
      </label>
          <label>
          S
          <input type="radio" value="XS" defaultChecked={selectedBtn === 'S'} onChange={(e) => { handleClick(e) }} />
        </label>
    </>
  )
}