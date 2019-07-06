import React, { createContext, useReducer, useContext } from 'react';

const ToneContext = createContext();

const ToneProvider = ({ reducer, initialState, children }) => {
  return (
    <ToneContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ToneContext.Provider>
  );
};

export const useToneState = () => useContext(ToneContext);

export default ToneProvider;
