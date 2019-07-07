import React from 'react'
import ToneProvider from './ToneContext/ToneContext'
import ToneReducer from './ToneContext/ToneReducer'
import initialDAWState from './ToneContext/initialToneState'
import Transport from './components/Transport'

const DAW = () => {
  return (
    <ToneProvider reducer={ToneReducer} initialState={initialDAWState}>
      <Transport />
    </ToneProvider>
  )
}

export default DAW