import React, { Component } from 'react'

import './App.css'

import Counter from './components/Counter'
import Total from './components/Total'
import Reset from './components/Reset'

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  }

  increment = (counterIndex) => {
    const { counters } = this.state
    const copiedCounters = [...counters]
    copiedCounters[counterIndex].value += 1
    this.setState({ counters: copiedCounters })
  }

  decrement = (counterIndex) => {
    const { counters } = this.state
    const copiedCounters = [...counters]
    copiedCounters[counterIndex] = { ...copiedCounters[counterIndex] }
    copiedCounters[counterIndex].value -= 1
    this.setState({ counters: copiedCounters })
  }

  reset = () => {
    const { counters } = this.state
    const initialCounters = counters.map((counter) => ({
      id: counter.id,
      value: 0,
    }))
    this.setState({ counters: initialCounters })
  }

  render() {
    const { counters } = this.state
    return (
      <div className="App">
        <Total counters={counters} />
        <Reset reset={this.reset} />
        <div className="counters">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              counter={counter}
              increment={this.increment}
              decrement={this.decrement}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
