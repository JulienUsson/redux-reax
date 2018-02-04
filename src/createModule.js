import createReducer from './createReducer'
import createActions from './createActions'
import createMutations from './createMutations'

function createModule({ state, mutations, actions }) {
  const reducer = createReducer(state, mutations)
  const mutationsCreators = createMutations(mutations)
  const actionsCreators = createActions(actions)
  return {
    reducer,
    mutationsCreators,
    actionsCreators,
    creators: {
      ...mutationsCreators,
      ...actionsCreators,
    },
  }
}

export default createModule
