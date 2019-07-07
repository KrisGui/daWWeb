import Tone from 'tone'

const transportState = {
  playback: 'stop',
  metronomeState: false,
  tempo: Tone.Transport.bpm.value.toFixed(2),
  taps: []
}

const tracklistState = {}

export default {
  transportState,
  tracklistState
}