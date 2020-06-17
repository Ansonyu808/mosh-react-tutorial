import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-outline-primary"
          onClick={this.props.onReset}
        >
          reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
