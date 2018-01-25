import createReducer from './createReducer'
import createActions from './createActions'
import createMutations from './createMutations'

function createModule({ state, mutations, actions }) {
  return {
    reducer: createReducer(state, mutations),
    mutations: createMutations(mutations),
    actions: createActions(actions),
  }
}

export default createModule
