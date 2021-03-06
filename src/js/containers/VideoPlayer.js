import React, { Component } from 'react'
import { connect } from 'react-redux'

import VideoPlayerLayout from '../components/Player/VideoPlayerLayout'
import Video from '../components/Player/Video'
import Title from '../components/Player/Title'
import PlayPause from '../components/Player/PlayPause'
import Timer from '../components/Player/Timer.js'
import Controls from '../components/Player/VideoPlayerControls.js'
import ProgressBar from '../components/Player/ProgressBar'
import Spinner from '../components/Player/Spinner'
import Volume from '../components/Player/Volume'
import FullScreen from '../components/Player/FullScreen'

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
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
    this.video.volume = event.target.value;
  }
  handleFullScreenClick = event => {
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen()
    }
  }
  setRef = element => {
    this.player = element
  }
  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title
          title={this.props.media.title}
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
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
          />
          <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </Controls>
        <Spinner
          active={this.state.loading}
        />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src={this.props.media.src}
        />
      </VideoPlayerLayout>
    )
  }
}
function mapStateToProps(state, props){
  return {
    media: state.modal
  }
}

export default connect(mapStateToProps)(VideoPlayer)
