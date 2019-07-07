import { playbackReducer } from './playback'

const transportReducer = ({ playback, metronomeState, tempo, taps }, action) => ({
  playback: playbackReducer(playback, action),
  metronomeState,
  tempo,
  taps
})

export default transportReducer