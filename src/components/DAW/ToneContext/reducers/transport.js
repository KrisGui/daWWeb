const transportReducer = (state, action) => {
  switch (action.type) {
    case 'playback':
      return { ...state, playback: action.payload }
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