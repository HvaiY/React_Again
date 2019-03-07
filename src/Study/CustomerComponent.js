import React from 'react';
import ReactDOM from 'react-dom';

// 自定义组件
function Name(props){
    return <h1>名称：{props.name}</h1>
};

function NickName(props){
    return <h1>昵称：{props.nickName}</h1>
};

function Age(props){
    return <h1>年龄：{props.age}</h1>
};

function Gender(props){
    return <h1>性别：{props.gender}</h1>
};

function App(){  // 注意  JSX 多个标签 () 包裹
    return(
    <div>
    <Name name="王芳"/>
     <NickName nickName="小芳"/>
     <Age age='18'/>
     <Gender gender='女'/>   
    </div>
   );
}

// 直接导出  使用时直接生效
export default ReactDOM.render(<App/>,document.getElementById('root'));