import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    // console.log("Prev Props", prevProps);
    // console.log("Prev State", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Perfect for an Ajax call and get new data from the server
      // In this case, if we update counter value on the frontend, post that data to the server
      console.log("Do something");
    }
  }

  componentWillUnmount() {
    console.log("a");
    console.log("Counter - Unmount");
    // Perfect for cleanup of timers or listeners before the element is remeoved from the dom to avoid memory leaks
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.handleDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  handleIncrement = (id) => {
    this.props.onIncrement(id);
  };

  handleDelete = (id) => {
    this.props.onDelete(id);
  };
}

export default Counter;
