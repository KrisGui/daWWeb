import React, { useEffect } from 'react';
import { useToneState } from '../ToneContext/ToneContext';
import { DECREMENT_BPM, INCREMENT_BPM } from '../ToneContext/API/transport/tempo'
import { Toggle, Momentary } from './UI'

const Transport = () => {
  const {transport} = useToneState();

  /* felt cute, might delet l8r */
  useEffect(() => {
    return () => {
      transport.metronome.device.dispose()
    }
  })
  
  return (
    <div className='Transport container'>
      <div className='controller'>
        <Momentary className={''} textValue={'-'} dispatchAction={DECREMENT_BPM} />
        <Momentary className={''} textValue={'+'} dispatchAction={INCREMENT_BPM} />
        <Toggle className={'metronome-toggle'} textValue={'○●'} />
      </div>
      <div className='controller'>
        <Toggle className={'transport-toggle'} textValue={'❙▶'} dispatchAction={'toggleTransport'} />
        <Toggle className={'transport-stop'} textValue={'■'} dispatchAction={'stopTransport'} />
      </div>
    </div>
  );
};

export default Transport;