import React, { Component } from 'react';
import VideoPlayerLayout from '../components/videoPlayerLayout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/playPause'
import Timer from '../components/Timer'
import Controls from '../components/videoPlayerControls'
import { FormatedTime } from '../../widgets/helpers'

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: '0 : 00',
    currentTime: '0 : 00'
  }
  togglePlay = event => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount () {
    this.setState({
      pause: (!this.props.autoPlay)
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      duration: FormatedTime( this.video.duration )
    })
  }

  handleTimeUpdate = event => {
    console.log(this.video.currentTime)
    this.setState({
      currentTime: FormatedTime( this.video.currentTime )
    })
  }

  render() {
    return (
      <VideoPlayerLayout>
        <Title 
          title='esto es un video'
        />
        <Controls>
          <PlayPause 
            pause={this.state.pause}
            handleClick={this.togglePlay} 
          />
          <Timer 
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
        </Controls>
        <Video
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          autoPlay={this.props.autoPlay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
