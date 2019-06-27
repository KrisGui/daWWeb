import React from "./react";
import ToneJsContext from "./ToneJsContext";
// import ToneJs from "./ToneJs";
import Tone from "./tone";

class ToneJsProvider extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  createSynth = () => {
    return new Tone.Synth({
      oscillator: { type: "sawtooth" },
      envelope: {
        decay: 0.005,
        sustain: 0.005,
        release: 0.005
      }
    });
  };
  // interfaceContent = {
  //   actionButton: "TestAction"
  // };
  render() {
    return (
      <ToneJsContext.Provider value={this}>
        {this.props.children}
      </ToneJsContext.Provider>
    );
  }
}

export default ToneJsProvider;
