import { Transport } from 'tone'

/* ACTION TYPES */
export const INCREMENT_BPM = 'INCREMENT_BPM'
export const DECREMENT_BPM = 'DECREMENT_BPM'

const setBPM = newBPM => {
  isNaN(newBPM)
    ? newBPM = Transport.bpm.value
    : newBPM < 30
    ? Transport.bpm.value = 30
    : newBPM > 300
    ? Transport.bpm.value = 300
    : Transport.bpm.value = newBPM
}

const bpmReducer = (state, action) => {
  switch (action) {
    case INCREMENT_BPM:
      break
    case DECREMENT_BPM:
      break
    default:
      return state
  }
}

export default bpmReducer