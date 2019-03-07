import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  // 组件挂载的时候调用
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  // 组件卸载的时候调用
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1> hello world</h1>
        <h2>当前时间是：{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default ReactDOM.render(<Clock />, document.getElementById("root"));
