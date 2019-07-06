import React from 'react';
import {
  Transport,
  // Tracklist,
  // Controller
} from './DAW/';

import ToneProvider from './DAW/Context/ToneProvider';

import initialState from './DAW/Context/initialStates';

import transportReducer from './DAW/Context/reducers/transport';
import tracklistReducer from './DAW/Context/reducers/tracklist'

export const reducer = ({ transportState, tracklistState }, action) => {
  /* Middleware goes here */
  return {
    transportState: transportReducer(transportState, action),
    tracklistState: tracklistReducer(tracklistState, action)
  };
};

const Main = () => {
  return (
    <ToneProvider initialState={initialState} reducer={reducer}>
      <div className="Main">
        <Transport />
        {/* <Controller /> */}
        {/* <Tracklist /> */}
      </div>
    </ToneProvider>
  );
};

export default Main;
