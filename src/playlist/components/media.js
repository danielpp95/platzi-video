import React, { Component } from 'react'
import './media.css'

class Media extends Component {
  render() {

    return (
      <div className='Media' >
        <div className="Media-cover " >
          <img className="Media-image" src="./images/covers/bitcoin.jpg" alt="" width={260} height={160} />
          <h3 className="Media-title" >¿por que aprender reacr?</h3>
          <p className="Media-author" >daniel pereira</p>
        </div>  
      </div>
    )
  }
}

export default Media