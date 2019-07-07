import React, { useEffect } from 'react';
import { useToneState } from '../ToneContext/ToneProvider';
import { Button, /* Input */ } from './UI';
import { toggleMetronome } from '../ToneContext/API';
import { changePlayback, handlePlaybackChange } from '../ToneContext/API/Transport/playback'

const Transport = () => {
  const [{ transportState }, dispatch] = useToneState();
  let { playback, /* metronomeState, tempo, taps */ } = transportState
  console.log(playback)
  useEffect(() => handlePlaybackChange(playback), [playback])
  return (
    <div className="Transport container">
      <div className="tempo controller">
        <Button className={'tempo-tap'} buttonText={'Tap'} />
        <Button className={'tempo-decrement'} buttonText={'-'} />
        {/* <Input className={tempo-input} type={'number'} placeholderValue={bpm} functionality={setBPM} /> */}
        <Button className={'tempo-increment'} buttonText={'+'} />
        <Button
          className={'metronome'}
          buttonText={'○●'}
          mouseDownFunc={toggleMetronome}
        />
      </div>

      <div className="position controller" />

      <div className="playback controller">
        <Button
          className={'playback-toggle'}
          buttonText={'❙▶'}
          mouseDownFunc={() => dispatch(changePlayback(playback === 'play' ? 'pause' : 'play'))}
        />
        <Button
          className={'playback-stop'}
          buttonText={'■'}
          mouseDownFunc={() => dispatch(changePlayback('stop'))}
        />
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
