import React from 'react'
import { connect } from 'react-redux'
import { mutations, actions } from './store/counter'

const App = ({ count, increment, incrementAsync }) => (
  <div>
    {count}
    <button onClick={increment}>increment</button>
    <button onClick={incrementAsync}>async increment</button>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(mutations.increment()),
  incrementAsync: () => dispatch(actions.incrementAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
