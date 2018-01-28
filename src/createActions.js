function getContext(reduxDispatch, getState, actions) {
  const commit = (name, ...payload) => reduxDispatch({ type: name, payload })
  const dispatch = (name, ...payload) =>
    actions[name](getContext(reduxDispatch, getState, actions), ...payload)
  return { commit, dispatch, getState }
}

function createActions(actions) {
  const actionsArray = Object.entries(actions).map(([key, value]) => ({
    [key]: (...payload) => (dispatch, getState) =>
      value(getContext(dispatch, getState, actions), ...payload),
  }))

  return Object.assign({}, ...actionsArray)
}

export default createActions
