import React from 'react'
import PropTypes from 'prop-types'
import './progressBar.css'

const ProgressBar = ({ duration, value, handleProgressChange }) => (
  <div className='progressBar'>
    <input
      type='range'
      min={0}
      max={duration}
      value={value}
      onChange={handleProgressChange}
    />
  </div>
)

ProgressBar.propTypes = {
  duration: PropTypes.number,
  value: PropTypes.number,
  handleProgressChange: PropTypes.func
}

export default ProgressBar
