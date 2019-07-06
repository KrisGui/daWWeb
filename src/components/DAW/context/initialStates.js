import Tone from 'tone'

const initialTransportState = {
  playbackState: Tone.Transport.state,
  metronomeState: false,
  tempo: Tone.Transport.bpm.value.toFixed(2),
  taps: []
}

const initialTracklistState = {}

export default {
  initialTransportState,
  initialTracklistState
}