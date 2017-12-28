import React, { Component } from 'react';
import VideoPlayerLayout from '../components/videoPlayerLayout'
import Video from '../components/video'
import Title from '../components/title'

class VideoPlayer extends Component {
  render() {
    return (
      <VideoPlayerLayout>
        <Title 
          title='esto es un video'
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
