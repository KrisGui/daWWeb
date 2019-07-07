import React, { createContext, useContext, useReducer } from 'react'
import ToneReducer from './ToneReducer'
import initialToneState from './initialToneState'

const ToneStateContext = createContext()
const ToneDispatchContext = createContext()

const ToneProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ToneReducer, initialToneState)
  return (
    <ToneStateContext.Provider value={state}>
      <ToneDispatchContext.Provider value={dispatch}>
        {children}
      </ToneDispatchContext.Provider>
    </ToneStateContext.Provider>
  )
}

export const useToneState = () => {
  const context = useContext(ToneStateContext)
  if (context === undefined) throw new Error('useToneState must be used within a ToneProvider')
  return context
}

export const useToneDispatch = () => {
  const context = useContext(ToneDispatchContext)
  if (context === undefined) throw new Error('useToneDispatch must be used within a ToneProvider')
  return context
}

export const useTone = () => {
  return [useToneState(), useToneDispatch()]
}

export default ToneProvider