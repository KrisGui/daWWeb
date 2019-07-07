import transportStateReducer from './API/transport/playback'
import Tone from 'tone'

const ToneReducer = (toneState, action) => {
  switch (action.type) {
    case 'toggleTransport':
      Tone.Transport.start()
      console.log(Tone.Transport.state)
      return { ...toneState, transport: { ...toneState.transport, transportState: Tone.Transport.state } }
    case 'stopTransport':
      Tone.Transport.stop()
      console.log(Tone.Transport.state)
      break
    default: throw new Error(`Unhandled Action: ${action.type}`)
  }
}

export default ToneReducer