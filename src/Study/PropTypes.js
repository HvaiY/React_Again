import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; // React d的校验 js

var title="校验是否对应数据类型，如不是则控制台抛错";

class Mytitle extends React.Component{
    render(){
        return (
            <h4>Hello ,{this.props.title}</h4>
        );
    }
}

Mytitle.propTypes={
    title:PropTypes.string // 校验是否为string 如果不是抛出异常到js 控制台
};

ReactDOM.render(<Mytitle title={title}/> ,document.getElementById('root'));