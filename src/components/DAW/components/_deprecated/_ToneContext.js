/* import React, {
  createContext,
  useState,
  // useEffect
} from 'react'
import Tone, { Transport } from 'tone'

export const ToneCtx = createContext()

const ToneContext = props => {
  
  const [bpm, setBPM] = useState(Transport.bpm.value.toFixed(2))
  const changeBPM = newBPM => {
    isNaN(newBPM)
      ? newBPM = bpm
      : newBPM < 30
      ? Transport.bpm.value = 30
      : newBPM > 300
      ? Transport.bpm.value = 300
      : Transport.bpm.value = newBPM
      setBPM(Transport.bpm.value.toFixed(2))
  }
  
  const logTransport = () => {
    Transport.scheduleRepeat(() => {
        console.log(Transport.position.slice(0, 5))
    }, '16n')
  }

  const createDevice = (type, config) => new Tone[type](config)

  const trackTypes = ['Audio', 'MIDI', 'Return']
  const instrumentTypes = ['NoiseSynth', 'Synth', 'AMSynth', 'DuoSynth', 'Sampler', 'FMSynth', 'MonoSynth', 'PluckSynth', 'MetalSynth', 'PolySynth', 'MembraneSynth']
  const effectTypes = ['Chorus', 'AutoPanner', 'AutoWah', 'PitchShift', 'StereoWidener', 'Tremolo', 'PingPongDelay', 'Convolver', 'StereoFeedbackEffect', 'Chebyshev', 'Vibrato', 'BitCrusher', 'StereoXFeedbackEffect', 'FeedbackEffect', 'Reverb', 'Distortion', 'JCReverb', 'Freeverb', 'AutoFilter', 'FeedbackDelay', 'Phaser']

  return (
    <ToneCtx.Provider value={{
      // transportState: {
      //   // playbackState,
      //   bpm,
      //   transportPosition,
      // },

      changeBPM,
      logTransport,
      createDevice,      

      trackTypes,
      instrumentTypes,
      effectTypes,
    }}>
      {props.children}
    </ToneCtx.Provider>
  )
}

export default ToneContext */