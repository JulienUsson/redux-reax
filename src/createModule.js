import createReducer from './createReducer'
import createActions from './createActions'
import createMutations from './createMutations'

function createModule({ state, mutations, actions }) {
  const reducer = createReducer(state, mutations)
  const mutationsFunc = createMutations(mutations)
  const actionsFunc = createActions(actions)
  return {
    reducer,
    creators: {
      ...mutationsFunc,
      ...actionsFunc,
      mutations: mutationsFunc,
      actions: actionsFunc,
    },
  }
}

export default createModule
