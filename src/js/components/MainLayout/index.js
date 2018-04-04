import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const MainLayout = ({ children }) => {
  return (
    <section className='mainLayout'>
      {children}
    </section>
  )
}

MainLayout.propTypes = {
  children: PropTypes.array
}

export default MainLayout
