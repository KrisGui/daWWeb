import React from 'react'
import TransportProvider from './context/transport'
import Transport from './components/Transport'

const DAW = () => {
  return (
    <TransportProvider>
      <Transport />
    </TransportProvider>
  )
}

export default DAW