function createMutations(mutations) {
  const mutationsArray = Object.keys(mutations).map(key => ({
    [key]: payload => ({ type: key, ...payload }),
  }))

  return Object.assign({}, ...mutationsArray)
}

export default createMutations
