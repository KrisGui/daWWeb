import React, {useState, useContext} from 'react';
import { Select, Button } from '../UI';
import { ToneCtx } from '../../context/ToneProvider'
import Track from './track';

const Controller = (props) => {
  const toneCtx = useContext(ToneCtx)
  const { trackTypes, instrumentTypes, effectTypes } = toneCtx;
  return (
    <div>
      <Select options={trackTypes} defaultValue={'-- Track Types --'}/>
      <Select options={instrumentTypes} defaultValue={'-- Track Types --'}/>
      <Button
        innerText={'Add track'}
        // onClick={() => }
        />
    </div>
  )
}

export default Controller;
