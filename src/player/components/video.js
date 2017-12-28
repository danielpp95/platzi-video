import React, { Component } from 'react';
import './video.css'

class Video extends Component {
  togglePlay = () => {
    this.props.pause ? this.video.play() : this.video.pause()
  }
  
  setRef = element => {
    this.video = element
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.pause !== this.props.pause) {
      this.togglePlay();
    }
  }
  render() {
    return (
      <div className="Video">
        <video
          src={this.props.src}
          autoPlay={this.props.autoPlay}
          ref={this.setRef}
        />
      </div>
    );
  }
}

export default Video;
