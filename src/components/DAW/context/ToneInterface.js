import { Transport, Synth, TickSource } from 'tone';

export const ToneInterface = {
  state: {
    bpm: Transport.bpm.value.toFixed(2),
    beats: +Transport.position.split(':')[0] + 1,
    bars: +Transport.position.split(':')[1] + 1,
    sixteenths: +Transport.position.split(':')[2][0] + 1,
  },

  metronome: new Synth({
    oscillator: { type: 'sawtooth' },
    envelope: {
      decay: 0.005,
      sustain: 0.005,
      release: 0.005
    }
  }),

  tapWatch: new TickSource(1).start(0),
};
