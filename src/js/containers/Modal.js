import { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

class Modal extends Component {
  render () {
    return createPortal(
      this.props.children,
      document.getElementById('modal')
    )
  }
}

Modal.propTypes = {
  children: PropTypes.object
}

export default Modal
