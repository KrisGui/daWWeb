import Tone from 'tone'

const initialToneState = {
  transport: {
    bpm: {
      taps: [],
      value: Tone.Transport.bpm.value,
    },
    metronome: {
      active: false,
      animationFrame: 0,
      animationFrames: ['●○', '○●'],
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
    playback: Tone.Transport.state,
  }
}

export default initialToneState