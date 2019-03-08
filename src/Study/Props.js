import React from 'react';
import ReacrDOM  from 'react-dom';

// React.Component 默认属性  defaultProps 无需构造函数声明

class MessageTitle extends React.Component{
    render(){
        return(
            <div>
                <h3>您好，{this.props.name}</h3>
            </div>
        );
    }
}

// 设置组件的默认属性
MessageTitle.defaultProps={name:"react测试"};

ReacrDOM.render(<MessageTitle/>,document.getElementById('root'));

//--------------------子类使用默认defaultProps 调用父类的State---

class PDH extends React.Component{
    constructor(){
        super();
        this.state={
            name:"大海",
            url:'www.pandahai.com'
        }
    }
 render(){
     return (
         <div>
           <Name name={this.state.name}/> 
           <Url url={this.state.url}/>
         </div>
     );
 }
}

class Name extends React.Component{
    render(){
        return <p>名称：{this.props.name}</p>;  
    }
}

class Url extends React.Component{
    render(){
        return <p>Url:{this.props.url}</p>
    }
}
// Name  与 Url 组件直接使用各种默认的Props（defaultProps）
// 使用组件的时候 将父类的state 赋值给子类的各种自定义属性 做到交互
ReacrDOM.render(<PDH/>,document.getElementById('root'));