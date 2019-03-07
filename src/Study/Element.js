
import React from 'react';
import ReactDOM from 'react-dom';


export default function tick(){
    const ele=(<div>
        <h2>Hello World</h2>
        <h2>当前时间：{new Date().toLocaleTimeString()}</h2>
    </div>);
    ReactDOM.render(ele,document.getElementById('root'));
};

