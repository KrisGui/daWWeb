import React, {Component} from 'react'
import { Input } from '../UI'

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
    return this.props !== nextProps
  }

  render() {
    console.log(this.props)
    return (
      <div className='Track container'>
       <Input type={'text'} placeholder={this.props.id}/>
      </div>
    )
  }
}

export default Track
