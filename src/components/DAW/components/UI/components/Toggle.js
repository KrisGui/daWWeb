import React from 'react';

export const Toggle = ({ className, func, style, textValue }) => {
  return (
    <button
      className={className}
      onMouseDown={e => {
        e.preventDefault();
        func();
      }}
      style={style}
    >
      {textValue}
    </button>
  );
};
