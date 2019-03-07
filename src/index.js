import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Element from "./Study/Element";
import Element2 from "./Study/Element.2";
import Ele from "./Study/Component";
import StyleTest from "./Study/JSX"; // 直接导入 那么就直接使用导出的默
import XiaoFang from "./Study/CustomerComponent";
import Statejs from "./Study/State";

//const rootDiv = document.getElementById('root');
// 渲染目标  root
//ReactDOM.render(<App />, rootDiv);
//解除渲染挂载  与render相反效果
//ReactDOM.unmountComponentAtNode(rootDiv);
// 直接调用方法
//setInterval(Ele,1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
