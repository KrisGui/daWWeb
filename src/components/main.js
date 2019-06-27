import React from 'react';
import { Transport, Tracklist } from './DAW/';

// import ToneJsProvider from './context/ToneJsProvider';
// import ToneJsContext from './context/ToneJsContext';
import ToneProvider from './DAW/context/ToneProvider'

const Main = () => {
  return (
    <ToneProvider>
      <div className="Main">
        <Transport />
        <Tracklist />
      </div>
    </ToneProvider>
  );
};

export default Main;
