import React, { useState } from 'react';

function ControlledInput() {
  // 1. Initialize state for the input value
  const [name, setName] = useState('');

  // 2. Update state on every input change
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: 
        {/* 3. Value is bound to state, and onChange handles updates */}
        <input 
          type="text" 
          value={name} 
          onChange={handleChange} 
          placeholder="Type something..."
        />
      </label>
      <button type="submit">Submit</button>
      <p>Current value: {name}</p>
    </form>
  );
}

export default ControlledInput;