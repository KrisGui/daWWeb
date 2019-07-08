import { Transport } from 'tone'

const transportStateReducer = (state, action) => {
  transportStateReducer.actions = {
    toggleTransport: () => {
      Transport.state === 'started' ? Transport.pause() : Transport.start()
      return Transport.state
    },
    stopTransport: () => {
      Transport.stop()
      return Transport.state
    }
  }

  if (action in transportStateReducer.actions) {
    return transportStateReducer.actions[action](state, action)
  } 

  return state
}

export default transportStateReducer