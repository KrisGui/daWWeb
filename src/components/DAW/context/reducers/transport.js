import Tone from 'tone'

const initialTransportState = {
  playbackState: Tone.Transport.state,
  metronomeState: false,
  tempo: Tone.Transport.bpm.value.toFixed(2),
  taps: []
}

const transportReducer = (state = initialTransportState, action) => {
  switch (action.type) {
    case 'CHANGE_PLAYBACK_STATE':
      return { ...state, playbackState: action.newPlaybackState }
    case 'TOGGLE_METRONOME':
      return { ...state, metronomeState: !state.metronomeState }
    case 'CHANGE_TEMPO':
      return { ...state, tempo: action.newTempo}
    case 'ADD_TAP':
      return { ...state, taps: [state.taps, action.tap] }
    default:
      return state
  }
}

export default transportReducer