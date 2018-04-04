import React from 'react'
import PropTypes from 'prop-types'
import FullScreenIcon from '../Icons/fullScreen'
import './fullScreen.css'

const FullScreen = ({ handleFullScreenClick }) => (
  <div
    className='fullScreen'
    onClick={handleFullScreenClick}
  >
    <FullScreenIcon
      size={25}
      color='white'
    />
  </div>
)

FullScreen.propTypes = {
  handleFullScreenClick: PropTypes.func
}

export default FullScreen
