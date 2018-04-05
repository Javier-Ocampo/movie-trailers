import React from 'react'
import PropTypes from 'prop-types'

const MovieDetails = ({ title }) => (
  <span>
    {title}
  </span>
)

MovieDetails.propTypes = {
  title: PropTypes.string
}

export default MovieDetails
