import React from 'react';
import ToneProvider from './DAW/ToneContext/ToneProvider';

import initialStates from './DAW/ToneContext/API/initialStates';
import transportReducer from './DAW/ToneContext/reducers/transport';
import tracklistReducer from './DAW/ToneContext/reducers/tracklist'

import { Transport, /* Tracklist, Controller */ } from './DAW';

const reducer = ({ transportState, tracklistState }, action) => {
  /* Middleware goes here */
  return {
    transportState: transportReducer(transportState, action),
    tracklistState: tracklistReducer(tracklistState, action)
  };
};

const Main = () => {
  return (
    <ToneProvider initialState={initialStates} reducer={reducer} >
      <div className="Main">
        <Transport />
        {/* <Controller /> */}
        {/* <Tracklist /> */}
      </div>
    </ToneProvider>
  );
};

export default Main;
