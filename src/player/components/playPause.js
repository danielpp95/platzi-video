import React from 'react'
import './playPause.css'
import Play from '@/icons/components/play'
import Pause from '@/icons/components/pause'
import Timer from './Timer'

const PlayPause = props => (
  <div className="PlayPause" >
    {
      props.pause 
      ? 
        <button onClick={props.handleClick} >
          <Play size={25} color="white" />
        </button> 
      :
        <button onClick={props.handleClick} >
          <Pause size={25} color="white" />
        </button>
    }
    
    
  </div>
)

export default PlayPause