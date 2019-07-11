import React, { createContext, useContext, useReducer } from 'react'
import { Transport } from 'tone'

const PlaybackState = createContext()
const PlaybackDispatch = createContext()

export const playbackReducer = (state, action) => {
  playbackReducer.actions = {
    toggleTransport: () => {
      Transport.state === 'started' ? Transport.pause() : Transport.start()
      console.log('Tone.Transport:', Transport.state)
      return Transport.state
    },
    stopTransport: () => {
      Transport.stop()
      console.log('Tone.Transport:', Transport.state)
      return Transport.state
    }
  }

  if (action.type in playbackReducer.actions) {
    return playbackReducer.actions[action.type](state, action)
  } else console.error(`'${action.type}' not defined in playbackReducer`)

  return state
}

export const PlaybackProvider = ({ children }) => {
  const [playbackState, playbackDispatch] = useReducer(playbackReducer, Transport.state)
  return (
    <PlaybackDispatch.Provider value={playbackDispatch}>
      <PlaybackState.Provider value={playbackState}>
        { children }
      </PlaybackState.Provider>
    </PlaybackDispatch.Provider>
  )
}

export const PlaybackStateProvider = ({ children }) => {
  const [playbackState] = useReducer(playbackReducer, Transport.state)
  return (
    <PlaybackState.Provider value={playbackState}>
      { children }
    </PlaybackState.Provider>
  )
}

export const usePlaybackState = () => {
  const context = useContext(PlaybackState)
  if (context === undefined) console.error('usePlaybackState within PlaybackStateProvider!!!')
  return context
}

export const PlaybackDispatchProvider = ({ children }) => {
  const [, playbackDispatch] = useReducer(playbackReducer, Transport.state)
  return (
    <PlaybackDispatch.Provider value={playbackDispatch}>
      { children }
    </PlaybackDispatch.Provider>
  )
}

export const usePlaybackDispatch = () => {
  const context = useContext(PlaybackDispatch)
  if (context === undefined) console.error('usePlaybackDispatch within PlaybackDispatchProvider!!!')
  return context
}