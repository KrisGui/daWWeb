import React, {useState} from 'react'
import Tone from 'tone'
import TapTempo from './tapTempo'

const Transport = () => {
  const [bpm, setBPM] = useState(Tone.Transport.bpm.value.toFixed(2))

  const changeBPM = newBPM => {
    isNaN(newBPM)
      ? newBPM = bpm
      : newBPM < 30
        ? Tone.Transport.bpm.value = 30
        : newBPM > 300
          ? Tone.Transport.bpm.value = 300
          : Tone.Transport.bpm.value = newBPM
    setBPM(Math.round((Tone.Transport.bpm.value * 100) / 100).toFixed(2))
    console.log(bpm)
  }

  return (
    <div className='container'>
      <TapTempo changeBPM={changeBPM}/>
    </div>
  )
}

export default Transport

/*
Tone.Transport.defaults = {
  bpm: 120, // Tone.Transport.bpm.value
  swing: 0, // between 0-1
  swingSubdivision: '8n', // value < '4n'
  timeSignature: 4, // numerator over 4
  loopStart: 0, // Tone.Transport.loop = false
  loopEnd: '4m',
  PPQ: 192
}
*/
