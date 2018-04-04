import React from 'react'
import PropTypes from 'prop-types'
import VolumenIcon from '../Icons/volume'
import './volume.css'

const Volume = ({ handleVolumeChange }) => {
  return (
    <button
      className='volume'
    >
      <VolumenIcon
        color='white'
        size={25}
      />
      <div className='volume-range'>
        <input
          type='range'
          min={0}
          max={1}
          step={0.05}
          onChange={handleVolumeChange}
        />
      </div>
    </button>
  )
}

Volume.propTypes = {
  handleVolumeChange: PropTypes.func
}

export default Volume
