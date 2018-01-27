import React from 'react'
import { connect } from 'react-redux'
import { mutations, actions } from './store/counter'

const App = ({
  count,
  increment,
  incrementBy,
  incrementAsync,
  incrementByAsync,
}) => (
  <div>
    {count}
    <button onClick={increment}>increment</button>
    <button onClick={() => incrementBy(2)}>increment by 2</button>
    <button onClick={incrementAsync}>async increment</button>
    <button onClick={() => incrementByAsync(2)}>async increment by 2</button>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(mutations.increment()),
  incrementBy: amount => dispatch(mutations.incrementBy(amount)),
  incrementAsync: () => dispatch(actions.incrementAsync()),
  incrementByAsync: amount => dispatch(actions.incrementByAsync(amount)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
