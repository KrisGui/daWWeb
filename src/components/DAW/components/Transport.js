import React from 'react';
import { useToneDispatch } from '../ToneContext/ToneContext';
import { toggleTransport, stopTransport } from '../ToneContext/API/transport/playback'
import { Button } from './UI/components/button'

const Transport = () => {
  const dispatch = useToneDispatch();
  return (
    <div className='Transport container'>
      <Button buttonText={'❙▶'} mouseDownFunc={() => dispatch(toggleTransport())} />
      <Button buttonText={'■'} mouseDownFunc={() => dispatch(stopTransport())} />
    </div>
  );
};

export default Transport;