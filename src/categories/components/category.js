import React from 'react';
import Playlist from '@/playlist/components/playlist';
import './category.css'

function Category(props) {
  return ( 
    <div className="Category" >
      <p className="Categorie-description" >{props.description}</p>
      <h2 className="Categorie-title" >{props.title}</h2>
      {
        <Playlist 
          Playlist={props.playlist}
          handleOpenModal={props.handleOpenModal}
        />
      }
    </div>
  )
}

export default Category