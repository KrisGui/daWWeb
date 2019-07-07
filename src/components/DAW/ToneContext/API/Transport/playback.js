import { Transport } from 'tone'

const transportStateReducer = (toneState, action) => {
  switch (action.type) {
    
    case 'toggleTransport':
      if (Transport.state === 'started') Transport.pause()
      else Transport.start()
      console.log('Transport', Transport.state)
      return { ...toneState, transport: { ...toneState.transport, transportState: Transport.state } }
      
    case 'stopTransport':
      Transport.stop()
      console.log('Transport', Transport.state)
      return { ...toneState, transport: { ...toneState.transport, transportState: Transport.state } }

    default: throw new Error(`Unhandled transportState action: ${action.type}`)
    
  }
}

/* ACTION CREATORS */
export const toggleTransport = () => ({ type: 'toggleTransport' })
export const stopTransport = () => ({ type: 'stopTransport' })

export default transportStateReducer