import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import counter from './store/counter'

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
    <button onClick={() => incrementByAsync(5, 200)}>
      async increment by 5
    </button>
  </div>
)

App.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  incrementBy: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  incrementByAsync: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  count: state.counter.count,
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(counter.increment()),
  incrementBy: amount => dispatch(counter.incrementBy(amount)),
  incrementAsync: () => dispatch(counter.incrementAsync()),
  incrementByAsync: (amount, timeout) =>
    dispatch(counter.incrementByAsync(amount, timeout)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
