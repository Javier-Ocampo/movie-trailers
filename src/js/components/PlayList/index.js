import React from 'react'
import PropTypes from 'prop-types'
import MediaPlayer from '../MediaPlayer'
import './style.css'

const Playlist = ({ playlist, openModal }) => (
  <div className='playlist'>
    {
      playlist.map(media => <MediaPlayer key={media.id} {...media} openModal={openModal} />)
    }
  </div>
)

Playlist.propTypes = {
  playlist: PropTypes.array,
  openModal: PropTypes.func
}

export default Playlist
