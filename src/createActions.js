function createActions(actions) {
  const actionsArray = Object.entries(actions).map(([key, value]) => ({
    [key]: (...payload) => (dispatch, getState) =>
      value(
        {
          commit: (name, payload) => dispatch({ type: name, payload }),
          dispatch,
          getState,
        },
        ...payload
      ),
  }))

  return Object.assign({}, ...actionsArray)
}

export default createActions
