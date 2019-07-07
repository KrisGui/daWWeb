import React, {useState, useEffect, useRef, useLayoutEffect} from 'react'
import Tone from './tone'

const TapTempo = props => {
  useEffect(() => {
    window.tapWatch = new Tone.TickSource(1).start(0)
    return () => {
      window.tapWatch.dispose()
    }
  }, [])

  const [taps] = useState([])
  useEffect(() => {}, [taps])

  const tapButtonRef = useRef()
  useLayoutEffect(() => {
    const {current} = tapButtonRef

    const handleMouseDown = e => {
      e.preventDefault()
      tapButtonRef.current.classList.add('active')
    }
    const handleMouseUp = () => tapButtonRef.current.classList.remove('active')
    const handleMouseLeave = () => tapButtonRef.current.classList.remove('active')

    current.addEventListener('mousedown', handleMouseDown)
    current.addEventListener('mouseup', handleMouseUp)
    current.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      current.removeEventListener('mousedown', handleMouseDown)
      current.removeEventListener('mouseup', handleMouseUp)
      current.removeEventListener('mouseleave', handleMouseLeave)
    }
  })

  return (
    <div>
      <button id='tap' ref={tapButtonRef}>Tap</button>
    </div>
  )
}

export default TapTempo