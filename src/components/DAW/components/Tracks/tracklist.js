import React, {useState} from 'react';
import { Select } from '../UI';
import Track from './track';

const Tracklist = (props) => {
  const [ tracks, setTracks ] = useState([]);
  const [ returnTracks, setReturnTracks ] = useState([]);
  return (
    <div className="tracks">
      <div className="tracklist-container">
        {tracks.map((track, idx) => (
          <Track
            key={track}
            placeHolder={track}
          />
        ))}
      </div>
      <div className='returnTracks'>
        {returnTracks.map((returnTrack, idx) => (
          <Track
            key={returnTrack}
            placeHolder={returnTrack}
          />
        ))}
      </div>
      <div className="master">
        <Track
          placeHolder={'Master'}
        />
      </div>
    </div>
  )
}

export default Tracklist;
