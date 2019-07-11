import React from 'react';
import { usePlayback } from '../context/transport'
import Controller, { Toggle } from './UI'

const Transport = () => {
  const context = usePlayback()
  console.log(context)

  return (
    <div className='Transport container'>
      <div className='controller'>
        <Toggle className={'transport-toggle'} func={() => /* transportDispatch */({ type: 'toggleTransport' })} textValue={'❙▶'} />
        <Toggle className={'transport-stop'} func={() => /* transportDispatch */({ type: 'stopTransport' })} textValue={'■'} />
      </div>
    </div>
  );
};

export default Transport;