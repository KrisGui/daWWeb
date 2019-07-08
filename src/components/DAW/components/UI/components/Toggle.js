import React, { useRef, useEffect } from 'react';
import { useTone } from '../../../ToneContext/ToneContext'

export const Toggle = ({ className, dispatchAction, textValue }) => {
  const [/* state */, dispatch] = useTone()

  const toggleRef = useRef();
  useEffect(() => {
    const { current } = toggleRef;

    current.addEventListener('mousedown', e => e.preventDefault());
    return () => {
      current.removeEventListener('mousedown', e => e.preventDefault());
    };
  }, []);

  return (
    <button className={className} ref={toggleRef} onClick={() => dispatch(dispatchAction)}>
      {textValue}
    </button>
  );
};
