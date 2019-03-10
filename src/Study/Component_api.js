import React from "react";
import ReactDOM from "react-dom";

// 设置状态：setState
// 替换状态：replaceState
// 设置属性：setProps
// 替换属性：replaceProps
// 强制更新：forceUpdate
// 获取DOM节点：findDOMNode
// 判断组件挂载状态：isMounted

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handClick = this.handClick.bind(this);
    this.state = { clickCount: 0 };
  }

  handClick() {
    this.setState(function(state) {
      return { clickCount: state.clickCount + 1 };
    });
  }

  render() {
    return (
      <h2 onClick={this.handClick}>
        点我，点击次数为：{this.state.clickCount}
      </h2>
    );
  }
}

export function SetStates() {
  ReactDOM.render(<Counter />, document.getElementById("root"));
}

// 关于 setState() 这里有三件事情需要知道。

// 1、不要直接更新状态

// 例如，此代码不会重新渲染组件：

// // Wrong
// this.state.comment = 'Hello';
// 应当使用 setState():

// // Correct
// this.setState({comment: 'Hello'});
// 构造函数是唯一能够初始化 this.state 的地方。

// 2、状态更新可能是异步的

// React 可以将多个 setState() 调用合并成一个调用来提高性能。

// 因为 this.props 和 this.state 可能是异步更新的，你不应该依靠它们的值来计算下一个状态。

// 例如，此代码可能无法更新计数器：

// // Wrong
// this.setState({
//   counter: this.state.counter + this.props.increment,
// });
// 要修复它，请使用第二种形式的 setState() 来接受一个函数而不是一个对象。 该函数将接收先前的状态作为第一个参数，将此次更新被应用时的props做为第二个参数：

// // Correct
// this.setState((prevState, props) => ({
//   counter: prevState.counter + props.increment
// }));
// 上方代码使用了箭头函数，但它也适用于常规函数：

// // Correct
// this.setState(function(prevState, props) {
//   return {
//     counter: prevState.counter + props.increment
//   };
// });
// 3、状态更新合并

// 当你调用 setState() 时，React 将你提供的对象合并到当前状态。

// 例如，你的状态可能包含一些独立的变量：

// constructor(props) {
//     super(props);
//     this.state = {
//       posts: [],
//       comments: []
//     };
//   }
// 你可以调用 setState() 独立地更新它们：

// componentDidMount() {
//     fetchPosts().then(response => {
//       this.setState({
//         posts: response.posts
//       });
//     });

//     fetchComments().then(response => {
//       this.setState({
//         comments: response.comments
//       });
//     });
//   }
// 这里的合并是浅合并，也就是说 this.setState({comments}) 完整保留了 this.state.posts，但完全替换了 this.state.comments。

// isMounted 的方法在 ES6 中已经废除。主要的原因是它经过实际使用与测试可能不足以检测组件是否挂载，尤其是对于有一些异步的程序情况，以及逻辑上造成混乱。现在用以下方法代替：

// componentDidMount() {
//     this.mounted = true;
// }

// componentWillUnmount() {
//     this.mounted = false;
// }
