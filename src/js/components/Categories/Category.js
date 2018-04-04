import React from 'react'
import PropTypes from 'prop-types'
import PlayList from '../PlayList'
import './style.css'

const Category = ({
  description,
  title,
  playlist,
  openModal
}) => (
  <div className='category'>
    <p className='category-description'>{description}</p>
    <h2 className='category-title'>{title}</h2>
    <PlayList
      openModal={openModal}
      playlist={playlist}
    />
  </div>
)

Category.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  playlist: PropTypes.array,
  openModal: PropTypes.func
}

export default Category
