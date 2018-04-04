import React from 'react'
import PropTypes from 'prop-types'
import './videoPlayerLayout.css'

const VideoPlayerLayout = ({ setRef, children }) => (
  <div
    className='videoPlayer'
    ref={setRef}
  >
    {children}
  </div>
)

VideoPlayerLayout.propTypes = {
  setRef: PropTypes.func,
  children: PropTypes.array
}

export default VideoPlayerLayout
