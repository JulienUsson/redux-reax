import createReducer from './createReducer'
import createActions from './createActions'

function createModule({ state, mutations, actions }) {
  return {
    reducer: createReducer(state, mutations),
    actions: createActions(actions),
  }
}

export default createModule
