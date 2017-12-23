import React, { Component } from 'react'
import Media from '@/playlist/components/media'
import './playlist.css'

function Playlist (props) {
    return (
      <div  className="Playlist"  >
        {
          props.Playlist.map( (item) => {
            return <Media {...item} key={item.id}/>
          })
        }
      </div>
    )
  }
export default Playlist;
