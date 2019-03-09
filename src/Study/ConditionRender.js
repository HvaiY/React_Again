import React from "react";
import ReactDOM from "react-dom";

//条件渲染  --简单条件渲染

function UserGreetings(props) {
  return <h2>欢迎回来</h2>;
}

function GuestGreetings(props) {
  return <h2>请先注册</h2>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreetings />;
  }
  return <GuestGreetings />;
}

export function zc() {
  ReactDOM.render(
    <Greeting isLoggedIn={false} />,
    document.getElementById("root")
  );
}

export function hy() {
  ReactDOM.render(
    <Greeting isLoggedIn={true} />,
    document.getElementById("root")
  );
}

// 元素变量   可以用变量来存储元素

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handLoginClick = this.handLoginClick.bind(this);
    this.handLogoutClick = this.handLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  handLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = (
        <div>
          <button onClick={this.handLogoutClick}>登出</button>
        </div>
      );
    } else {
      button = (
        <div>
          <button onClick={this.handLoginClick}>登录</button>
        </div>
      );
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export function Controller() {
  ReactDOM.render(<LoginControl />, document.getElementById("root"));
}

//  与运算符  &&

function MailBox(props) {
  const message = props.eleMessage;
  return (
    <div>
      <h1>hello world</h1>
      {message.length > 0 && <h2>你有{message.length}条未读信息</h2>}
    </div>
  );
}

const message = ["你好", "你来自哪里", "你是React"];
export function Message() {
  ReactDOM.render(
    <MailBox eleMessage={message} />,
    document.getElementById("root")
  );
}

// 三元运算符
//同样可以在{}中 和jsx 语法一起使用

// 阻止组件渲染

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">警告!</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "隐藏" : "显示"}
        </button>
      </div>
    );
  }
}

export function NotRender() {
  ReactDOM.render(<Page />, document.getElementById("root"));
}

// 以上代码 prevState 如何传递？

// setState() 可以接收一个函数，这个函数接受两个参数，第一个参数表示上一个状态值，第二参数表示当前的 props：

// this.setState((prevState, props) => ({
//     //do something here
// }));
