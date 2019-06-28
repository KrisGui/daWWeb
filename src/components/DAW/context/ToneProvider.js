import React, { createContext } from 'react';
import { ToneInterface } from './ToneInterface'

export const ToneCtx = createContext();

const ToneProvider = props => {
  return (
    <ToneCtx.Provider value={ToneInterface}>
      {props.children}
    </ToneCtx.Provider>
  );
};

export default ToneProvider;
