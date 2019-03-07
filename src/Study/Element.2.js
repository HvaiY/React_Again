
import React from 'react';
import ReactDOM from 'react-dom';


//使用函数封装 jsx 实现重用 方法返回的是一个元素 那么 参数就是元素的属性，标签性质使用函数返回的元素，
// 属性方式给 函数的参数赋值

function Ele(props){
 return (
    <div>
    <h2>Hello World</h2>
    <h2>当前Ele2时间：{props.date.toLocaleTimeString()}</h2>
   </div>
 )
}

export default function tick(){
   
    ReactDOM.render(<Ele date={new Date()}/>,document.getElementById('root'));
};

