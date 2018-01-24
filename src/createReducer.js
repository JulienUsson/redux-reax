const DEFAULT = 'default'

function createReducer(state, mutations) {
  return (state = state, action) => {
    const { type, ...payload } = action

    const mutation = mutations[type] || mutations[DEFAULT]

    if (mutation) {
      return mutation(state, payload)
    }

    return state
  }
}

export default createReducer
