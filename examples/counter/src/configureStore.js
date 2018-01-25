import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './store'

const configureStore = () => {
  return createStore(reducers, applyMiddleware(thunk))
}

export default configureStore
