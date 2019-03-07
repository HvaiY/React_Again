
import React from 'react';
import ReactDOM from 'react-dom';


//除了函数外我们还可以创建一个 React.Component 的 ES6 类，该类封装了要展示的元素，
//需要注意的是在 render() 方法中，需要使用 this.props 替换 props

class Ele extends React.Component{
 render(){
  return (
    <div>
    <h2>Hello World</h2>
    <h2>当前React.Component时间：{this.props.date.toLocaleTimeString()}</h2>
   </div>
 );
 }
};

export default function tick(){
     //值得注意的是 React DOM 首先会比较元素内容先后的不同，而在渲染过程中只会更新改变了的部分。也就是仅更新时间跳动的秒，
    ReactDOM.render(<Ele date={new Date()}/>,document.getElementById('root'));
};

