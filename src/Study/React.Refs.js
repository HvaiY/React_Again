import React from "react";
import ReactDOM from "react-dom";

// 获取组件的引用  refs

class MyComponent extends React.Component {
  handleClick() {
    // 使用原生的 DOM API 获取焦点

    var input = this.refs.myInput;
    input.focus();
    input.value = "获取到焦点了";
  }

  render() {
    //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
    return (
      <div>
        <input type="text" ref="myInput" />
        <input
          type="button"
          value="点我输入框获取焦点"
          onClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}

export function RefsTest() {
  ReactDOM.render(<MyComponent />, document.getElementById("root"));
}

// React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。
// 这个特殊的属性允许你引用 render() 返回的相应的支撑实例（ backing instance ）。这样就可以确保在任何时间总是拿到正确的实例。
// <input ref="myInput" />
// 在其它代码中，通过 this.refs 获取支撑实例:
// var input = this.refs.myInput;
// var inputValue = input.value;
// var inputRect = input.getBoundingClientRect();
