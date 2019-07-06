import React, {
  // useState
} from 'react'

import { useToneState } from '../../Context/ToneProvider'

import {
  Button,
  // Input
} from '../UI';

import {
  toggleTransport,
  stopTransport,
  toggleMetronome
} from '../Transport'

const Transport = () => {
  const [state, dispatch] = useToneState()
  console.log(state)
  return (
    <div className="Transport container">
      <div className="tempo controller">
        <Button className={'tempo-tap'} buttonText={'Tap'} />
        <Button className={'tempo-decrement'} buttonText={'-'} />
        {/* <Input className={tempo-input} type={'number'} placeholderValue={bpm} functionality={setBPM} /> */}
        <Button className={'tempo-increment'} buttonText={'+'} />
        <Button className={'metronome'} buttonText={'○●'} mouseDownFunc={toggleMetronome} />
      </div>

      <div className="position controller" />

      <div className="playback controller">
        <Button className={'playback-toggle'} buttonText={'❙▶'} mouseDownFunc={() => dispatch({type: 'CHANGE_PLAYBACK_STATE', newPlaybackState: 'started'})} />
        <Button className={'playback-stop'} buttonText={'■'} mouseDownFunc={stopTransport} />
      </div>
    </div>
  );
};

export default Transport;

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
