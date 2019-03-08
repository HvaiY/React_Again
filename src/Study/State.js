import React from "react";
import ReactDOM from "react-dom";

function FormatDate(props) {
  return <p>现在时间是：{props.date.toLocaleTimeString()}</p>;
}

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
        <h2>
          <FormatDate date={this.state.date} />
        </h2>
      </div>
    );
  }
}

// 组件封装 流式 数据自上到下(属性传递参数)
function App() {
  return (
    <div>
      <Clock id={1} />

      <Clock id={2} />

      <Clock id={3}/>

      <Clock id={5}/>
    </div>
  );
}

export default ReactDOM.render(<App />, document.getElementById("root"));
