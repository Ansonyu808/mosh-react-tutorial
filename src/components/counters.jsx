import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onIncrement, onDelete } = this.props;

    return (
      <div>
        <button className="btn btn-outline-primary" onClick={onReset}>
          reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
