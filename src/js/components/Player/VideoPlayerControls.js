import React from 'react'
import PropTypes from 'prop-types'
import './videoPlayerControls.css'

const VideoPlayerControls = ({ children }) => (
  <div className='videoPlayerControls'>
    {children}
  </div>
)

VideoPlayerControls.propTypes = {
  children: PropTypes.array
}

export default VideoPlayerControls
