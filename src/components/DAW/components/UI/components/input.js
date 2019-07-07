import React, { useState, useRef, useEffect } from 'react';

export const Input = ({ type, placeholderValue, functionality }) => {
  const [input, setInput] = useState('');
  const [placeholder] = useState(placeholderValue);
  const inputRef = useRef();
  useEffect(() => {
    const { current } = inputRef;
    current.addEventListener('keydown', e => {
      if (e.keyCode === 13) {
        functionality(input);
        current.blur();
      }
    });
    return () => {
      current.removeEventListener('keydown', e => {
        if (e.keyCode === 13) {
          functionality(input);
          current.blur();
        }
      });
    };
  }, [input, setInput, functionality]);
  return (
    <input
      ref={inputRef}
      type={type}
      placeholder={placeholder}
      value={input}
      onChange={e => setInput(e.target.value)}
      onBlur={() => setInput('')}
    />
  );
};
