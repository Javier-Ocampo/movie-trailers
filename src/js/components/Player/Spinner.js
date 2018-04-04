import React from 'react'
import PropTypes from 'prop-types'
import './spinner.css'

const Spinner = ({ active }) => {
  if (!active) return null
  return (
    <div className='spinner'>
      <span>Cargando...</span>
    </div>
  )
}

Spinner.propTypes = {
  active: PropTypes.bool
}

export default Spinner
