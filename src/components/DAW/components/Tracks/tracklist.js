import React, { useContext } from 'react';
import { ToneCtx } from '../../Context/ToneContext'
import Track from './track';

const Tracklist = () => {
  const toneCtx = useContext(ToneCtx)
  const {
    tracks,
    returnTracks,
  } = toneCtx.tracklistState
  return (
    <div className="tracks">
      <div className="tracklist-container">
        {tracks.map((track, idx) => (
          <Track
            key={track}
            placeholderValue={track}
          />
        ))}
      </div>
      <div className='returnTracks'>
        {returnTracks.map((returnTrack, idx) => (
          <Track
            key={returnTrack}
            placeholderValue={returnTrack}
          />
        ))}
      </div>
      <div className="master">
        <Track
          placeholderValue={'Master'}
        />
      </div>
    </div>
  )
}

export default Tracklist;
