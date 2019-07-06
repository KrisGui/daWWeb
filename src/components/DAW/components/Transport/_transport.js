import React, { Component } from "react";
import Button from "../UI/button";
import Tone from "tone";

class Transport extends Component {
  constructor(props) {
    super(props);
    //decorate component with tonejs functionality
    //todo extract into decorator pattern
    this.toneJsContext = props.toneJsContext;

    this.state = {
      bpm: Tone.Transport.bpm.value.toFixed(2),
      bpmInput: "",
      metronomeAnimation: "○●",
      beats: +Tone.Transport.position.split(":")[0] + 1,
      bars: +Tone.Transport.position.split(":")[1] + 1,
      sixteenths: +Tone.Transport.position.split(":")[2][0] + 1
    };

    this.taps = [];
    this.tapWatch = new Tone.TickSource(1).start(0);
    
    this.metronome = this.toneJsContext.createSynth();

    Tone.Transport.scheduleRepeat(time => {
      const note = Tone.Transport.position.split(":")[1] === "0" ? "A#5" : "C5";
      this.metronome.triggerAttackRelease(note, "32n", time);
    }, "4n");

    this.metronomeFrames = ["●○", "○●"];
    this.metronomeFrame = 0;
    Tone.Transport.scheduleRepeat(time => {
      Tone.Draw.schedule(() => {
        this.setState({
          metronomeAnimation: this.metronomeFrames[
            this.metronomeFrame % this.metronomeFrames.length
          ]
        });
        this.metronomeFrame++;
      }, time);
    }, "4n");

    Tone.Transport.scheduleRepeat(() => {
      Tone.Draw.schedule(() => {
        this.setState({
          beats: +Tone.Transport.position.split(":")[0] + 1,
          bars: +Tone.Transport.position.split(":")[1] + 1,
          sixteenths: +Tone.Transport.position.split(":")[2][0] + 1
        });
      });
    }, "32n");
  }

  componentDidMount() {
    document.querySelectorAll("button").forEach(button => {
      button.addEventListener("mousedown", e => e.preventDefault());
    });

    // Spacebar to toggle transport, will it interfere with track naming?
    document.addEventListener("keydown", e => {
      if (e.keyCode === 32) {
        if (Tone.Transport.state === "started") this.stopTransport();
        else this.toggleTransport();
      }
    });
  }

  componentWillUnmount() {
    this.tapWatch.dispose();
    this.metronome.dispose();

    document.querySelectorAll("button").forEach(button => {
      button.removeEventListener("mousedown", e => e.preventDefault());
    });

    document.removeEventListener("keydown", e => {
      if (e.keyCode === 32) {
        if (Tone.Transport.state === "started") this.stopTransport();
        else this.toggleTransport();
      }
    });
  }

  setBPM = newBPM => {
    isNaN(newBPM)
      ? (newBPM = this.state.bpm)
      : newBPM < 30
      ? (Tone.Transport.bpm.value = 30)
      : newBPM > 300
      ? (Tone.Transport.bpm.value = 300)
      : (Tone.Transport.bpm.value = newBPM);
    this.setState({
      bpm: (Math.round(Tone.Transport.bpm.value * 100) / 100).toFixed(2)
    });
  };

  inputBPM = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  blurInput = e => {
    this.setState({ [e.target.id]: "" });
  };

  submitBPM = e => {
    if (e.keyCode === 13) {
      this.setBPM(e.target.value);
      this.setState({ bpmInput: "" });
      e.target.blur();
    }
  };

  adjustBPM = e => {
    const value = e.shiftKey ? 0.01 : 1;
    const direction = e.target.id === "increment" ? value : -value;
    this.setBPM(Tone.Transport.bpm.value + direction);
    this.adjustTimeout = setTimeout(() => {
      this.adjustInterval = setInterval(() => {
        this.setBPM(Tone.Transport.bpm.value + direction);
      }, 30);
    }, 500);
  };

  clearAdjustTimers = () => {
    clearTimeout(this.adjustTimeout);
    clearInterval(this.adjustInterval);
  };

  tapBPM = e => {
    clearTimeout(this.tapTimeout);
    this.tapTimeout = setTimeout(() => {
      this.taps = [];
    }, 2000);

    let tappedBPM = 0;
    this.taps.push(this.tapWatch.seconds);
    this.tapWatch.stop().start();
    if (this.taps.length > 1) {
      const tapsTransformed = this.taps.slice(1);
      tappedBPM =
        60 /
        (tapsTransformed.reduce((a, c) => a + c, 0) / tapsTransformed.length);
      this.setBPM(tappedBPM);
    }
    e.target.className = "active";
  };

  clearActiveClass = e => {
    e.target.className = "";
  };

  toggleMetronome = e => {
    e.target.classList.toggle("active");
    e.target.classList.contains("active")
      ? this.metronome.toMaster()
      : this.metronome.disconnect(Tone.Master);
  };

  // toggleTransport = () => {
  //   document.getElementById("stop").className = "";
  //   const playPause = document.getElementById("play-pause");
  //   switch (Tone.Transport.state) {
  //     case "started":
  //       Tone.Transport.pause();
  //       playPause.className = "paused";
  //       break;
  //     default:
  //       Tone.Transport.start();
  //       playPause.className = "active";
  //   }
  // };

  // stopTransport = () => {
  //   document.getElementById("play-pause").className = "";
  //   const stop = document.getElementById("stop");
  //   Tone.Transport.stop();
  //   this.setState({ transportPosition: Tone.Transport.position });
  //   stop.className = "active";
  // };

  render() {
    return (
      <div className="Transport container">
        <div className="tempo controller">
          <Button 
          git/>
          <button
            type="button"
            id="tap"
            onMouseDown={this.tapBPM}
            onMouseUp={this.clearActiveClass}
            onMouseLeave={this.clearActiveClass}
          >
            {" "}
            Tap{" "}
          </button>

          <button
            type="button"
            id="decrement"
            onMouseDown={this.adjustBPM}
            onMouseUp={this.clearAdjustTimers}
            onMouseLeave={this.clearAdjustTimers}
          >
            {" "}
            -{" "}
          </button>

          <input
            type="number"
            id="bpmInput"
            placeholder={this.state.bpm}
            value={this.state.bpmInput}
            onChange={this.inputBPM}
            onKeyUp={this.submitBPM}
            onBlur={this.blurInput}
          />

          <button
            type="button"
            id="increment"
            onMouseDown={this.adjustBPM}
            onMouseUp={this.clearAdjustTimers}
            onMouseLeave={this.clearAdjustTimers}
          >
            {" "}
            +{" "}
          </button>

          <button type="button" id="metronome" onClick={this.toggleMetronome}>
            {" "}
            {this.state.metronomeAnimation}{" "}
          </button>
        </div>

        <div className="position controller">
          <table>
            <tbody>
              <tr>
                <td className="data">{this.state.beats}</td>
                <td>:</td>
                <td className="data">{this.state.bars}</td>
                <td>:</td>
                <td className="data">{this.state.sixteenths}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="playback controller">
          <button
            type="button"
            id="play-pause"
            className=""
            onClick={this.toggleTransport}
          >
            {" "}
            ❙▶{" "}
          </button>

          <button
            type="button"
            id="stop"
            className="active"
            onClick={this.stopTransport}
          >
            {" "}
            ■{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Transport;

/* OBJECTIVES
Options Object?
  Tap to start (how many bars/beats?)
  Custom Count-In duration (bars, beats)
  Custom Metronome sounds

Count-In (probably needs Redux)
  only during Record-Arm?

Seek (timeline)
  Nudge (live performances)

Record
  Record-Arm
    global/per-track
  userMedia
  MIDI Dub/Overdub

Transport Display
  editable (Seek)
*/
