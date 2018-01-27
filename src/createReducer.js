export const DEFAULT = 'default'

function createReducer(initialState, mutations) {
  return (state = initialState, action) => {
    const { type, ...payload } = action

    const mutation = mutations[type] || mutations[DEFAULT]

    if (mutation) {
      return mutation(state, payload)
    }

    return state
  }
}

export default createReducer
