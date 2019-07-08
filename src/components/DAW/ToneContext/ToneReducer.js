import Tone from 'tone'
import transportStateReducer from './API/transport/playback'
import bpmReducer from './API/transport/tempo'

const ToneReducer = ({ transport }, action) => ({
  transport: {
    bpm: bpmReducer(transport.bpm, action),
    metronome: {
      active: false,
      animationFrames: ['●○', '○●'],
      animationFrame: 0,
      device: new Tone.Synth({
        oscillator: { type: 'sawtooth' },
        envelope: {
          decay: 0.005,
          sustain: 0.005,
          release: 0.005
        }
      })
    },
    position: Tone.Transport.position,
    transportState: transportStateReducer(transport.transportState, action)
  }
})

export default ToneReducer