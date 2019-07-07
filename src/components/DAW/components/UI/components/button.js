import React, { useRef, useEffect } from 'react';

export const Button = ({
  className,
  buttonText,
  mouseDownFunc,
  mouseUpFunc,
  mouseLeaveFunc,
}) => {
  const buttonRef = useRef();
  useEffect(() => {
    const { current } = buttonRef;
    current.addEventListener('mousedown', e => e.preventDefault());
    return () => {
      current.removeEventListener('mousedown', e => e.preventDefault());
    };
  }, []);

  return (
    <button
      className={className}
      ref={buttonRef}
      onMouseDown={mouseDownFunc}
      onMouseUp={mouseUpFunc}
      onMouseLeave={mouseLeaveFunc}
    >
      {buttonText}
    </button>
  );
};
