import React from 'react'
import TransportProvider from '../../context/transport'

export default function Controller({ children }) {
  return (
    <TransportProvider>
      { children }
    </TransportProvider>
  )
}