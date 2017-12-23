import React, { Component } from 'react'
import Media from '@/playlist/components/media'
import './playlist.css'
import Play from '@/icons/components/play'
import Pause from '@/icons/components/pause'
import Volume from '@/icons/components/volume'
import FullScreen from '@/icons/components/full-screen'

function Playlist (props) {
    const playlist = props.data.categories[0].playlist
    
    return (
      <div  className="Playlist"  >
      <Play size={50} color="red" />
      <Pause size={50} color="red" />
      <Volume size={50} color="red" />
      <FullScreen size={50} color="red" />
        {
          playlist.map( (item) => {
            return <Media {...item} key={item.id}/>
          })
        }
        
      </div>
    )
  }

export default Playlist;
