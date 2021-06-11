import React from "react";

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prev) => ({ counter: prev.counter + 1 }));
  }

  decrement() {
    this.setState((prev) => ({ counter: prev.counter - 1 }));
  }

  render() {
    return (
      <div>
        <button value="-" onClick={this.decrement}>
          -
        </button>
        <span>{this.state.counter}</span>
        <button value="+" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}
