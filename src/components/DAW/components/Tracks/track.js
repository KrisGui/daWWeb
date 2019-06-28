import React, {Component} from 'react'

class Track extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: null,
      pan: 0,
      volume: 0,
      mute: false,
      solo: false,
      clips: [],
      route: []
    }

  }

  shouldComponentUpdate(nextProps) {
    if (this.props !== nextProps) return true
    return false
  }

  render() {
    return (
      <div className='Track container'>
        Track Component
      </div>
    )
  }
}

export default Track