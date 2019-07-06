import Tone, {
  Transport,
  Synth
} from 'tone'

const metronome = new Synth({
  oscillator: { type: 'sawtooth' },
  envelope: {
    decay: 0.005,
    sustain: 0.005,
    release: 0.005
  }
})

Transport.scheduleRepeat(time => {
  const note = Transport.position.split(':')[1] === '0' ? 'A#5' : 'C5'
  metronome.triggerAttackRelease(note, '32n', time)
}, '4n')

const animateMetronome = (metronomeActiveState) => {
  const metronomeFrames = ['●○', '○●']
  let metronomeFrameIdx = 0
  Transport.scheduleRepeat(time => {}, '4n')
}

export const toggleMetronome = () => {
  let active = false
  const connectMetronome = () => {
    active = !active
    active ? metronome.connect(Tone.Master) : metronome.disconnect(Tone.Master)
  }
  connectMetronome()
  console.log(active)
}