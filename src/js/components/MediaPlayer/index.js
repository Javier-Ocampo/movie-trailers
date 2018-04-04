import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const MediaPlayer = ({
  cover,
  title,
  src,
  author,
  openModal
}) => (
  <div className='media' onClick={openModal.bind(null, title, src)}>
    <div className='media-cover'>
      <img
        src={cover}
        alt=''
        width={260}
        height={386}
        className='media-image'
      />
    </div>
    <h3 className='media-title'>{title}</h3>
    <p className='media-author'>{author}</p>
  </div>
)

MediaPlayer.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  src: PropTypes.string,
  openModal: PropTypes.func
}

export default MediaPlayer
