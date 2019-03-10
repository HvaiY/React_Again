import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Hello Hvai" };
    this.handChange = this.handChange.bind(this);
  }

  handChange(event) {
    this.setState({ value: event.target.value }); // 来自表单的value
  }
  render() {
    var value = this.state.value;
    return (
      <div>
        <a>{"放大镜"}</a>
        <hr />
        <input type="text" value={value} onChange={this.handChange} />
        <h2>{value}</h2>
      </div>
    );
  }
}

export function Forms() {
  ReactDOM.render(<HelloMessage />, document.getElementById("root"));
}

// 使用属性传递时间到子组件上
class Content extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.myDataProp}
          onChange={this.props.updateStateProp}
        />
        <h4>{this.props.myDataProp}</h4>
      </div>
    );
  }
}
class HelloMessageParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Hello Runoob!" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    var value = this.state.value;
    return (
      <div>
        <Content myDataProp={value} updateStateProp={this.handleChange} />
      </div>
    );
  }
}

export function HelloMessageParentComponent() {
  ReactDOM.render(<HelloMessageParent />, document.getElementById("root"));
}

//select 下拉表单  不使用selected 属性 而是 value
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择您最喜欢的网站
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="gg">Google</option>
            <option value="rn">Runoob</option>
            <option value="tb">Taobao</option>
            <option value="fb">Facebook</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

export function Selects() {
  ReactDOM.render(<FlavorForm />, document.getElementById("root"));

  // 多个表单
  class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };

      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    render() {
      return (
        <form>
          <label>
            是否离开:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            访客数:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      );
    }
  }
}
