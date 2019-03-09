import React from "react";
import ReactDOM from "react-dom";

// 使用map 遍历   但是 列表 没有key （相同的兄弟元素没有key 会报错到控制台）
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(numbers => <li>{numbers}</li>);

export function Numbers() {
  ReactDOM.render(<ul>{listItems}</ul>, document.getElementById("root"));
}

//
