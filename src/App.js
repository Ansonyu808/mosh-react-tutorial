import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 2 },
    ],
  };
  render() {
    return (
      <div>
        <Navbar totalCounters={this.state.counters.length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.doIncrement}
            onDelete={this.doDelete}
          />
        </main>
      </div>
    );
  }

  handleReset = () => {
    const { counters } = this.state;
    counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters: counters });
  };

  doIncrement = (id) => {
    const { counters } = this.state;
    counters.map((counter) => {
      if (counter.id === id) {
        counter.value++;
      }
      return counter;
    });

    this.setState({ counters: counters });
  };

  doDelete = (id) => {
    const newCounters = this.state.counters.filter(
      (counter) => counter.id !== id
    );

    this.setState({ counters: newCounters });
  };
}

export default App;
