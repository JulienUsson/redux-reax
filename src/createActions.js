function createActions(actions) {
  return Object.entries(actions).map(([key, value]) => ({
    [key]: payload => (dispatch, getState) =>
      value({ dispatch, getState }, payload),
  }))
}

export default createActions
