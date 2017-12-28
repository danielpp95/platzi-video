import React from 'react'
import FullScreenIcon from '../../icons/components/full-screen'
import './fullScreen.css'

const FullScreen = props => (
  <div className="FullScreen" onClick={props.handleFullScreenClick} >
    <FullScreenIcon
      color='white'
      size={25}
    />
  </div>
)

export default FullScreen