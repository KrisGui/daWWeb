import React from "react";
import { Transport, Tracklist } from "./DAW/";

import ToneJsProvider from "./context/ToneJsProvider";
import ToneJsContext from "./context/ToneJsContext";

const Main = () => {
  return (
    <ToneJsProvider>
      <ToneJsContext.Consumer>
        {props => {
          return (
            <div className="Main">
              <Transport toneJsContext={props} />
              <Tracklist />
            </div>
          );
        }}
      </ToneJsContext.Consumer>
    </ToneJsProvider>
  );
};

export default Main;
