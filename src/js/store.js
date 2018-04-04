import { compose, applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from './reducers'

const hiddenActions = ['EXAMPLE_HIDDEN_ACTION']
const logger = createLogger({
  predicate: (getState, action) => !hiddenActions.includes(action.type),
  collapsed: (getState, action, logEntry) => !logEntry.error
})

let store = null
const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  middleware.push(logger)
  store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)))
} else {
  store = createStore(reducers, applyMiddleware(...middleware))
}

export default store
