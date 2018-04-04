import React from 'react'
import PropTypes from 'prop-types'
import Category from './Category'
import './style.css'

const Categories = ({ categories, openModal }) => (
  <div className='categories'>
    {
      categories.map((item) =>
        <Category
          key={item.id}
          {...item}
          openModal={openModal}
        />
      )
    }
  </div>
)

Categories.propTypes = {
  categories: PropTypes.array,
  openModal: PropTypes.func
}

export default Categories
