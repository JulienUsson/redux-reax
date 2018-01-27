function createMutations(mutations) {
  const mutationsArray = Object.keys(mutations).map(type => ({
    [type]: (...payload) => ({ type, payload }),
  }))

  return Object.assign({}, ...mutationsArray)
}

export default createMutations
