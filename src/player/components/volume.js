import React from 'react'
import VolumenIcon from '../../icons/components/volume'
import './volume.css'

const Volume = props => (
  <div className="Volume" >
    <div onClick={props.handleClick} >
      <VolumenIcon
        color="white"
        size={25}
      />
    </div>
    <div  className="Volume-range" >
      <input
        type="range" 
        min={0}
        max={1}
        step={.05}
        onChange={props.handleVolumeChange}
        value={props.value}
      />
    </div>
  </div>
)

export default Volume