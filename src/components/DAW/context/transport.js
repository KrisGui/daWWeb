import React, { createContext, useContext, useReducer } from 'react'
import { Transport } from 'tone'

/* Tone.Transport initial config object, with 'playbackState', 'position', and 'loop' added */
const initialTransportState = {
  playbackState: 'stopped',
  position: '0:0:0',
  loop: false,
  bpm: 120,
  swing: 0,
  swingSubdivision: '8n',
  timeSignature: 4,
  loopStart: 0,
  loopEnd: '4m',
  PPQ: 192
}

/* Define Transport actions here */
const transportReducer = (transportState, transportAction) => {
  transportReducer.actions = {
    toggleTransport: () => {
      Transport.state === 'started' ? Transport.pause() : Transport.start()
      console.log('Tone.Transport:', Transport.state)
      return { ...transportState, state: Transport.state }
    },
    stopTransport: () => {
      Transport.stop()
      console.log('Tone.Transport:', Transport.state)
      return { ...transportState, state: Transport.state }
    },
    /* 
      setBPM >>> Transport.bpm.value = ? >>> validate bpm,
      setPosition >>> split bars:beats:sixteenths into separate state properties?,
      setSwing >>> value between 0 - 1,
      setSwingSubdivision >>> subdivision must be < '4n',
      setTimeSignature >>> numerator over 4,
      setLoopStart,
      setLoopEnd,
      setPPQ >>> hopefully we get to MIDI implementation ;)
     */
  }

  if (transportAction.type in transportReducer.actions) {
    return transportReducer.actions[transportAction.type](transportState, transportAction)
  } else console.error(`'${transportAction.type}' not handled in transportReducer`)

  return transportState
}

/* Provide Context and... */
const TransportContext = createContext()
export default function TransportProvider({ children }) {
  return (
    <TransportContext.Provider value={useReducer(transportReducer, initialTransportState)}>
      { children }
    </TransportContext.Provider>
  )
}

/* ...ensure each piece of it is used within the appropriate Provider */
export const usePlayback = () => {
  const context = useContext(TransportContext)
  if (context === undefined) console.error('usePlayback within TransportProvider')
  const [state, dispatch] = context
  return [state.playbackState, dispatch]
}