import React from 'react';
import ReactDOM from 'react-dom';

class OnOFF extends React.Component{
    constructor(props){
        super(props);
        this.state={isOff:true};
       this.handclick=this.handclick.bind(this);  // 绑定的是当前生成的标签(也就是this 代表生成的标签)
    
    }
handclick(){
    this.setState(preState=>({
        isOff:!preState.isOff
    }));
}

render(){
    return (
       <button  onClick={this.handclick}>
     {/*  <button  onClick={this.handclick()}>  这样也是可以 js 的做法就是直接加上() 调用js方法*/}
        {this.state.isOff?'OFF':'ON'}
        </button>
    );
}
}

ReactDOM.render(<OnOFF/> ,document.getElementById('root'))
