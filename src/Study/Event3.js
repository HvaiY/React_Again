import React from 'react';
import ReactDOM from 'react-dom';


class Popper extends React.Component{
    constructor(){
        super();
        this.state = {name:'Hello world!',age:'11'};
    }
    
    preventPop(name,age, e){    //事件对象e要放在最后
        e.preventDefault();
        alert(name+"   "+age);
    }
    
    render(){
        return (
            <div>
                <p>hello</p>
                {/* 通过 bind() 方法传递参数。 */}
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name,this.state.age)}>Click</a>--
                {/* 箭头方法传递参数 */}
                <a href="https://reactjs.org" onClick={(e)=>this.preventPop(this.state.name,this.state.age,e)}>Click</a>
            </div>
        );
    }
}
//  this 只与执行上下文有关
ReactDOM.render(<Popper/>,document.getElementById('root'));