import { Transport } from 'tone'

export const handlePlaybackChange = playbackState => {
  switch (playbackState) {
    case 'play':
      Transport.start()
      break
    case 'pause':
      Transport.pause()
      break
    case 'stop':
      Transport.stop()
      break
    default:
      throw new Error('action type is not defined')
  }
}

export const changePlayback = newPlaybackState => {
  return { type: 'playback', payload: newPlaybackState }
}

const playbackDispatch = {
  play: (state, action) => ({ ...state, playback: action.payload }),
  pause: (state, action) => ({ ...state, playback: action.payload }),
  stop: (state, action) => ({ ...state, playback: action.payload })
}

// export const playbackReducer = (state, action) => {
//   if (action.type in playbackDispatch) {
//     return playbackDispatch[action.type](state, action)
//   }
//   return state
// }

export const playbackReducer = (state, action) => {
  switch (action.type) {
    case 'play':
      return { ...state, playback: action.payload }
    case 'pause':
      return { ...state, playback: action.payload }
    case 'stop':
      break
    default:
      return state
  }
}