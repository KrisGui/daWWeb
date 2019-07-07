import Tone from 'tone'

const initialToneState = {
  transport: {
    bpm: {
      taps: [],
      value: Tone.Transport.bpm.value,
    },
    metronome: false,
    position: Tone.Transport.position,
    transportState: Tone.Transport.state,
  }
}

export default initialToneState