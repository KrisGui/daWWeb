import React, { useState } from 'react';

export const Input = ({ type, placeholder }) => {
  const [input, setInput] = useState('');
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={input}
      onChange={e => setInput(e.target.value)}
    />
  );
};
