import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ color, size, children }) => (
  <svg
    fill={color}
    height={size}
    width={size}
    viewBox='0 0 32 32'
  >
    {children}
  </svg>
)

Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

export default Icon
