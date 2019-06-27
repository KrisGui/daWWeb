import React, {
  useRef,
  useEffect,
} from 'react';

export const Button = ({ innerText }) => {
  const buttonRef = useRef()
  useEffect(() => {
    const { current } = buttonRef
    current.addEventListener('mousedown', e => e.preventDefault())
  }, [])

  return (
    <button className='button' ref={buttonRef}>
      {innerText}
    </button>
  )
};
