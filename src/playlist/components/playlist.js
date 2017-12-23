import React, { Component } from 'react'
import Media from '@/playlist/components/media'
import './playlist.css'

function Playlist (props) {
    const playlist = props.data.categories[0].playlist
    
    return (
      <div  className="Playlist"  >
        {
          playlist.map( (item) => {
            return <Media {...item} key={item.id}/>
          })
        }
      </div>
    )
  }

export default Playlist;
