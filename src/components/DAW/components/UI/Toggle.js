import React, {
  useRef,
  useEffect
} from 'react'

export const Toggle = ({ className, textValue, mouseDownFunc }) => {
  const toggleRef = useRef()
  useEffect(() => {
    const { current } = toggleRef
    current.addEventListener('mousedown', e => e.preventDefault())
    return () => {
      current.removeEventListener('mousedown', e => e.preventDefault())
    }
  }, [])

  return (
    <button className={className}
      ref={toggleRef}
      onMouseDown={mouseDownFunc}
    >
      {textValue}
    </button>
  )
}