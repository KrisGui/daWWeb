import React, {Component} from 'react'
import { Input } from '../../../components/UI'

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
    return (
      <div className='Track container'>
       <Input type={'text'} placeholderValue={this.props.placeholderValue}/>
      </div>
    )
  }
}

export default Track
