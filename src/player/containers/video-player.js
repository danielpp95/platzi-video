import React, { Component } from 'react';
import VideoPlayerLayout from '../components/videoPlayerLayout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/playPause'
import Timer from '../components/Timer'
import Controls from '../components/videoPlayerControls'
import { FormatedTime } from '../../widgets/helpers'
import ProgressBar from '../components/progressBar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import FullScreen from '../components/fullScreen'

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    lastVolumeState: null,
    volume: 1
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
      duration: this.video.duration
    })
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime
    })
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }
  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }

  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }

  handleVolumeChange = event => {
    this.video.volume = event.target.value
    this.setState({
      volume: this.video.volume
    })
  }

  mute = ()  => {
    const lastState = this.video.volume
    this.setState({
      lastVolumeState: lastState,
      volume: 0
    })
    this.video.volume = 0
  }

  unmute = () => {
    this.setState({
      volume: this.state.lastVolumeState
    })
    this.video.volume = this.state.lastVolumeState
  }

  handleVolumeMute = event => {
    console.log(this.video.volume)
    this.video.volume !== 0 ? this.mute() : this.unmute()
    console.log(this.video.volume)
  }

  setRef = element => {
    this.player = element
  }

  handleFullScreenClick = event => {
    !document.webkitIsFullScreen ? this.player.webkitRequestFullscreen() : document.webkitExitFullscreen()
  }

  render() {
    return (
      <VideoPlayerLayout setRef={this.setRef} >
        <Title 
          title='esto es un video'
        />
        <Controls>
          <PlayPause 
            pause={this.state.pause}
            handleClick={this.togglePlay} 
          />
          <Timer 
            duration={ FormatedTime (this.state.duration) }
            currentTime={ FormatedTime (this.state.currentTime) }
          />
          <ProgressBar 
            duration={ this.state.duration }
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            handleClick={this.handleVolumeMute}
            value={this.state.volume}
          />
          <FullScreen 
          handleFullScreenClick={this.handleFullScreenClick}
          />
        </Controls>
        {this.state.loading ? <Spinner/> : null }
        <Video
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          autoPlay={this.props.autoPlay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
