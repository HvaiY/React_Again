import React from 'react';
import ReactDOM from 'react-dom';

// JSX React 对JS 的xml 扩展 不仅仅适用于React ，可以在js里面写标签 eg
const Element=<h1>你好，世界</h1>;
// jsx 中可以直接使用js表达式  需要{}包裹
ReactDOM.render(
    <div>
         <h1>1+199={1+199};</h1>
    </div>
    ,
    document.getElementById('root'));
    // if else 可以用三元运算替代 
const i=3;
    ReactDOM.render(
        <div data-myarrtivute="测试自定义属性">
          <h1>{i == 1 ? 'True!' : 'False'}</h1>
        </div>
        ,
        document.getElementById('root')
    );
// 标签中 的class  for 分别使用 className 和htmlFor 替代
 // 样式 
 var myStyle={
     fontSize:15,
     color:'#FF0000'
 };

  // 数组
  const arr=[
    <p>你好，我是数组的第一个元素</p>,
    <p style={myStyle}>我是数组的第二个元素</p>

  ]
 ReactDOM.render(<h2 style={myStyle}>测试样式</h2>,document.getElementById('root'));
 export default ReactDOM.render(<div>{arr}</div>,document.getElementById('root'));