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
import MessageTitle from "./Study/Props";
import PropTypes from "./Study/PropTypes";
import Event from "./Study/Event3";
import {
  zc,
  hy,
  Controller,
  Message,
  NotRender
} from "./Study/ConditionRender";
import { Numbers, NumberUl, ComponentList } from "./Study/List";
import { SetStates } from "./Study/Component_api";
import { ComponentDidMount, LiftCycleFunc } from "./Study/LiftCycle";
import { Ajaxs } from "./Study/React.Fetch";
import {
  Forms,
  HelloMessageParentComponent,
  Selects,
  Reservations
} from "./Study/FormAndEvent";

//const rootDiv = document.getElementById('root');
// 渲染目标  root
//ReactDOM.render(<App />, rootDiv);
//解除渲染挂载  与render相反效果
//ReactDOM.unmountComponentAtNode(rootDiv);
// 直接调用方法
//setInterval(Ele,1000);
hy();
Controller();
Message();
NotRender();
//Numbers();
NumberUl();
ComponentList();
SetStates();
//ComponentDidMount();
LiftCycleFunc();
Ajaxs();
Forms();
HelloMessageParentComponent();
Selects();
Reservations();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
