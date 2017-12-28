import React, { Component } from 'react';
import VideoPlayerLayout from '../components/videoPlayerLayout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/playPause'

class VideoPlayer extends Component {
  state = {
    pause: true
  }
  togglePlay = event => {
    this.setState({
      pause: !this.state.pause
    })
  }

  render() {
    return (
      <VideoPlayerLayout>
        <Title 
          title='esto es un video'
        />
        <PlayPause 
          pause={this.state.pause}
          handleClick={this.togglePlay} 
        />
        <Video
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          autoPlay={false}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
