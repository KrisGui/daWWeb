import React, { useRef, useEffect } from 'react'
import { useTone } from '../../../ToneContext/ToneContext'

export const Momentary = ({ className, textValue, dispatchAction }) => {
  const [/* state */, dispatch] = useTone()

  const gateRef = useRef()
  useEffect(() => {
    const { current } = gateRef

    current.addEventListener('mousedown', e => e.preventDefault())
    return () => {
      current.removeEventListener('mousedown', e => e.preventDefault())
    }
  }, [])

  return (
    <button className={className} ref={gateRef} onMouseDown={() => dispatch(dispatchAction)}>
      {textValue}
    </button>
  )
}