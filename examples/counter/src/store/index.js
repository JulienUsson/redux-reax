import { combineReducers } from 'redux'
import { reducer as counter } from './counter'

export default combineReducers({
  counter,
})
