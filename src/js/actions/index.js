import {
  FETCH_MOVIES,
  OPEN_MODAL,
  CLOSE_MODAL
} from '../action-types'
import data from '../../data/api'

export const fetchMovies = () => ({
  type: FETCH_MOVIES,
  payload: data
})

export const openModal = (title, src) => ({
  type: OPEN_MODAL,
  payload: {
    title,
    src
  }
})

export const closeModal = () => ({
  type: CLOSE_MODAL
})
