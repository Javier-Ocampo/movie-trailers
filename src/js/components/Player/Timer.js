import React from 'react'
import PropTypes from 'prop-types'
import './timer.css'

const leftPad = number => {
  const pad = '00'
  return pad.substring(0, pad.length - number.length) + number
}

const formattedTime = secs => {
  const minutes = parseInt(secs / 60, 10)
  const seconds = parseInt(secs % 60, 10)
  return `${minutes} : ${leftPad(seconds.toString())}`
}

const Timer = ({ currentTime, duration }) => (
  <div className='timer'>
    <p>
      <span>{formattedTime(currentTime)} / {formattedTime(duration)}</span>
    </p>
  </div>
)

Timer.propTypes = {
  currentTime: PropTypes.number,
  duration: PropTypes.number
}

export default Timer
