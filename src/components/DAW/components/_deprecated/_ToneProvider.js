// import React, { createContext, useReducer, useContext } from 'react';

// const ToneContext = createContext();

// // const initialState = {
// //   transportState: {
// //     playback: 'stop',
// //     metronomeState: false,
// //     tempo: 120.00.toFixed(2),
// //     taps: []
// //   },
// //   tracklistState: {}
// // }

// // const reducer = ({ transportState, tracklistState }, action) => {
// //   /* Middleware goes here */
// //   return {
// //     transportState: transportReducer(transportState, action),
// //     tracklistState: {}
// //   }
// // }

// const ToneProvider = ({ reducer, initialState, children }) => {
//   return (
//     <ToneContext.Provider value={useReducer(reducer, initialState)}>
//       {children}
//     </ToneContext.Provider>
//   );
// };

// export const useToneState = () => useContext(ToneContext);

// export default ToneProvider;
