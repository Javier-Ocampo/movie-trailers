import React from 'react'
import PropTypes from 'prop-types'
import './playPause.css'
import Play from '../Icons/play'
import Pause from '../Icons/pause'

const PlayPause = ({ pause, handleClick }) => (
  <div className='playPause'>
    {
      pause
        ? <button
          onClick={handleClick}
        >
          <Play size={25} color='white' />
        </button>
        : <button
          onClick={handleClick}
        >
          <Pause size={25} color='white' />
        </button>
    }
  </div>
)

PlayPause.propTypes = {
  pause: PropTypes.bool,
  handleClick: PropTypes.func
}

export default PlayPause
