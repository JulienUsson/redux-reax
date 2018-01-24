import createReducer from './createReducer'

function createModule({ state, mutations }) {
  const reducer = createReducer(state, mutations)
  return { reducer }
}

export default createModule
