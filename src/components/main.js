import React from 'react';
import { Transport, Tracklist, Controller } from './DAW/';

// import ToneJsProvider from './context/ToneJsProvider';
// import ToneJsContext from './context/ToneJsContext';
import ToneProvider from './DAW/context/ToneProvider'
import AppProvider from '../components/DAW/context/appProvider'
const Main = () => {
  return (
    <ToneProvider>
      <div className="Main">
        <Transport />
        <AppProvider>
          <Controller />
          <Tracklist />
        </AppProvider>
      </div>
    </ToneProvider>
  );
};

export default Main;
