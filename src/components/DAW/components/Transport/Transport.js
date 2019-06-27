import React, { useContext } from 'react';
import { ToneCtx } from '../../context/ToneProvider';
import { Button, Input } from '../UI';

const Transport = () => {
  const toneCtx = useContext(ToneCtx);
  const {
    bpm,
    // beats,
    // bars,
    // sixteenths
  } = toneCtx.state;

  return (
    <div className="Transport container">
      <div className="tempo controller">
        <Button className={'tapTempo'} innerText={'Tap'} />
        <Button className={'decrementTempo'} innerText={'-'} />
        <Input className={'tempoDisplay'} type={'number'} placeholder={bpm} />
        <Button className={'incrementTempo'} innerText={'+'} />
        <Button className={'metronome'} innerText={'○●'} />
      </div>

      <div className="position controller" />

      <div className="playback controller">
        <Button className={'toggleTransport'} innerText={'❙▶'} />
        <Button className={'stopTransport'} innerText={'■'} />
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
