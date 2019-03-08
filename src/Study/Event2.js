import React from 'react';
import ReactDOM from 'react-dom';

class LoggingButton extends React.Component{
    handClick(){
        console.log('this is ',this);
    }

    render(){
        return(
            <button onClick={(e)=>this.handClick(e)}>点我</button>  // 参数e可以直接将当前生成的元素传给handClick 函数
        )
    }
}

ReactDOM.render(<LoggingButton/> ,document.getElementById('root'))
// 这样的方式也可能存在一个问题  每次点击都会生成创建一个不同的回调函数 
