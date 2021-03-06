import React from "react";
import ReactDOM from "react-dom";

// 生命周期方法

// componentWillMount 在渲染前调用,在客户端也在服务端。

// componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。

// componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。

// shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
// 可以在你确认不需要更新组件时使用。

// componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。

// componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。

// componentWillUnmount在组件从 DOM 中移除之前立刻被调用。

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opacity: 1.0 };
  }

  componentDidMount() {
    this.timer = setInterval(
      function() {
        var opacity = this.state.opacity;
        opacity -= 0.05;
        if (opacity < 0.1) {
          opacity = 1.0;
        }
        this.setState({
          opacity: opacity
        });
      }.bind(this),
      100
    );
  }

  render() {
    return (
      <div style={{ opacity: this.state.opacity }}>Hello {this.props.name}</div>
    );
  }
}

export function ComponentDidMount() {
  ReactDOM.render(<Hello name="world" id="Test" />, document.body); // 生成
}
//-----------
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: 0 };
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber() {
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>Test</button>
        <Content myNumber={this.state.data} />
      </div>
    );
  }
}

class Content extends React.Component {
  componentWillMount() {
    console.log("Component WILL MOUNT!");
  }
  componentDidMount() {
    console.log("Component DID MOUNT!");
  }
  componentWillReceiveProps(newProps) {
    console.log("Component WILL RECEIVE PROPS!");
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL UPDATE!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE!");
  }
  componentWillUnmount() {
    console.log("Component WILL UNMOUNT!");
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}
export function LiftCycleFunc() {
  ReactDOM.render(
    <div>
      <Button />
    </div>,
    document.getElementById("root")
  );
}
