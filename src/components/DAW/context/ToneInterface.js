import React, { useState } from 'react'
import Tone, { Transport } from 'tone';

class ToneInterface extends Tone {
  constructor() {
    this.transportState = {
      bpm: Transport.bpm.value.toFixed(2),
      beats: +Transport.position.split(':')[0] + 1,
      bars: +Transport.position.split(':')[1] + 1,
      sixteenths: +Transport.position.split(':')[2][0] + 1,
      playbackState: Transport.state
    }

    this.tracklistState = {
      tracks: [],
      returnTracks: [],
      trackSelect: {},
      newTrackSelect: '',
      newDeviceSelect: '',
    }

    this.trackTypes = ['Audio', 'MIDI', 'Return']
    this.instrumentTypes = ['NoiseSynth', 'Synth', 'AMSynth', 'DuoSynth', 'Sampler', 'FMSynth', 'MonoSynth', 'PluckSynth', 'MetalSynth', 'PolySynth', 'MembraneSynth']
    this.effectTypes = ['Chorus', 'AutoPanner', 'AutoWah', 'PitchShift', 'StereoWidener', 'Tremolo', 'PingPongDelay', 'Convolver', 'StereoFeedbackEffect', 'Chebyshev', 'Vibrato', 'BitCrusher', 'StereoXFeedbackEffect', 'FeedbackEffect', 'Reverb', 'Distortion', 'JCReverb', 'Freeverb', 'AutoFilter', 'FeedbackDelay', 'Phaser']
  }

  createDevice = (type, config) => new Tone[type](config)

  setBPM = newBPM => {
    isNaN(newBPM)
      ? newBPM = this.transportState.bpm
      : newBPM < 30
      ? Transport.bpm.value = 30
      : newBPM > 300
      ? Transport.bpm.value = 300
      : Transport.bpm.value = newBPM
    this.transportState.bpm = Transport.bpm.value.toFixed(2)
    console.log(Transport.bpm.value)
    console.log(this.transportState.bpm)
  }

  logTransport = () => {
    Transport.scheduleRepeat(() => {
      Tone.Draw.schedule(() => {
        console.log(Transport.position)
      })
    }, '16n')
  }

  toggleTransport = () => {
    switch (Transport.state) {
      case 'started':
        Transport.pause()
        console.log(Transport.state)
        break
      default:
        Transport.start()
        console.log(Transport.state)
    }
  }

  stopTransport = () => {
    Transport.stop()
    console.log(Transport.state)
  }

  toggleMetronome = () => {
    console.log('metronome clicked')
  }

  // metronome: new Synth({
  //   oscillator: { type: 'sawtooth' },
  //   envelope: {
  //     decay: 0.005,
  //     sustain: 0.005,
  //     release: 0.005
  //   }
  // }),

  // tapWatch: new TickSource(1).start(0),
};

export default new ToneInterface()