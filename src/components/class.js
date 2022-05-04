import React from "react";
import { Link } from "react-router-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Class Component Demo</h1>
        <div>This is {this.state.date.toLocaleTimeString()}</div>
        <Link className="backToHome" to="/">Back to Home</Link>
      </div>
    );
  }
}

export default Clock;
