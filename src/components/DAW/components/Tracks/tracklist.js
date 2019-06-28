import React, {Component} from 'react'
import Tone from 'tone'
import Track from './track'

class Tracklist extends Component {
  constructor() {
    super()
    this.state = {
      tracks: [],
      returnTracks: [],
      trackSelect: {},
      newTrackSelect: '',
      newDeviceSelect: '',
    }

    this.trackID = 0
    this.returnTrackID = 0

    this.trackTypes = ['Audio', 'MIDI', 'Return']
    this.instrumentTypes = ['NoiseSynth', 'Synth', 'AMSynth', 'DuoSynth', 'Sampler', 'FMSynth', 'MonoSynth', 'PluckSynth', 'MetalSynth', 'PolySynth', 'MembraneSynth']
    this.effectTypes = ['Chorus', 'AutoPanner', 'AutoWah', 'PitchShift', 'StereoWidener', 'Tremolo', 'PingPongDelay', 'Convolver', 'StereoFeedbackEffect', 'Chebyshev', 'Vibrato', 'BitCrusher', 'StereoXFeedbackEffect', 'FeedbackEffect', 'Reverb', 'Distortion', 'JCReverb', 'Freeverb', 'AutoFilter', 'FeedbackDelay', 'Phaser']
  }

  addTrack = newTrack => {
    this.state.tracks.length < 8
      ? this.setState(prevState => ({
          tracks: [...prevState.tracks, newTrack]
        }))
      : console.log('Max 8 tracks for now :(')
  }

  submitTrack = e => {
    e.preventDefault()
  }

  removeTrack = trackID => {
    this.setState(() => prevState => (
      {tracks: [...prevState.tracks.filter(track => track.trackID !== trackID)]}
    ))
  }

  selectType = e => {
    this.setState({[e.target.id]: e.target.value})
    if (!this.state.newTrackSelect) this.setState({newDeviceSelect: ''})
  }

  render() {
    return (
      <div className='Tracklist'>
        <div className='controller container'>
          <select id='newTrackSelect' onChange={this.selectType}>
            <option value=''> -- Select Track Type -- </option>
            {this.trackTypes.map(trackType => (
              <option key={trackType} value={trackType}>{trackType}</option>
            ))}
          </select>

          <select id='newDeviceSelect' onChange={this.selectType} disabled={this.state.newTrackSelect === ''}>
            <option value=''> -- Select Device -- </option>
            {this.state.newTrackSelect === 'Audio' && <option value='UserMedia'> UserMedia </option>}
            {this.state.newTrackSelect === 'MIDI' && this.instrumentTypes.map(instrumentType => (
              <option key={instrumentType} value={instrumentType}> {instrumentType} </option>
            ))}
            {this.state.newTrackSelect === 'Return' && this.effectTypes.map(effectType => (
              <option key={effectType} value={effectType}> {effectType} </option>
            ))}
          </select>

          <button type='button'
            onClick={this.addTrack}
            disabled={!this.state.newTrackSelect || !this.state.newDeviceSelect}> {`Add ${this.state.newTrackSelect} Track`} </button>
        </div>

        <div className='tracks'>
          {this.state.tracks.map(track => (
            <Track key={this.trackID} id={this.trackID++} track={track} removeTrack={this.removeTrack}/>
          ))}
        </div>

        <div className='returnTracks'>
          {this.state.returnTracks.map(returnTrack => (
            <Track key={this.returnTrackID} id={this.returnTrackID++} track={returnTrack} removeTrack={this.removeTrack}/>
          ))}
        </div>

        <div className='master'>
          <Track id='master' track={Tone.Master}/>
        </div>
      </div>
    )
  }
}

export default Tracklist