import {
  FETCH_MOVIES
} from '../action-types'

const defaultState = {
  categories: []
}

export default function (state = defaultState, { type, payload }) {
  switch (type) {
    case FETCH_MOVIES: {
      return payload
    }
    default:
      return state
  }
}
