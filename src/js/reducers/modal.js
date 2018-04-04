import { OPEN_MODAL, CLOSE_MODAL } from '../action-types'

const defaultState = {
  visibility: false,
  title: null,
  src: null
}

export default function (state = defaultState, { type, payload }) {
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        visibility: true,
        title: payload.title,
        src: payload.src
      }
    case CLOSE_MODAL:
      return {
        ...state,
        visibility: false
      }
    default:
      return state
  }
}
