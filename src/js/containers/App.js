import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MainLayout from '../components/MainLayout'
import Categories from '../components/Categories'
import SideBar from '../components/SideBar'
import Modal from './Modal'
import MovieModal from '../components/MovieModal'
import VideoPlayer from '../containers/VideoPlayer'

import {
  fetchMovies,
  openModal,
  closeModal
} from '../actions'

class App extends Component {
  componentDidMount () {
    this.props.fetchMovies()
  }
  render () {
    return (
      <MainLayout>
        <SideBar />
        <Categories
          categories={this.props.categories}
          openModal={this.props.openModal}
        />
        {
          this.props.modal.visibility &&
          <Modal>
            <MovieModal
              closeModal={this.props.closeModal}
            >
              <VideoPlayer
                autoplay
                src={this.props.modal.src}
                title={this.props.modal.title}
              />
            </MovieModal>
          </Modal>
        }
      </MainLayout>
    )
  }
}

App.propTypes = {
  categories: PropTypes.array,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  fetchMovies: PropTypes.func
}

const mapStateToProps = (state) => ({
  categories: state.data.categories,
  modal: state.modal
})

const mapDispachToProps = {
  fetchMovies,
  openModal,
  closeModal
}

export default connect(mapStateToProps, mapDispachToProps)(App)
