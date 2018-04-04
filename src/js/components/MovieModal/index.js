import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const MovieModal = ({ children, closeModal }) => (
  <div className='modal'>
    {children}
    <button
      onClick={closeModal}
      className='modal-close'
    />
  </div>
)

MovieModal.propTypes = {
  children: PropTypes.object,
  closeModal: PropTypes.func
}

export default MovieModal
