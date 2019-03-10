import React from "react";
import ReactDOM from "react-dom";

// 使用map 遍历   但是列表没有key （相同的兄弟元素没有key 会报错到控制台）
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(numbers => <li>{numbers}</li>);

export function Numbers() {
  ReactDOM.render(<ul>{listItems}</ul>, document.getElementById("root"));
}

// 元素Key 的指定(正确使用) key在兄弟元素间必须是惟一的
function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    <ListItem key={number.toString()} value={number} />
  ));

  return <ul>{listItems}</ul>;
}

const numberStrs = ["a", "b", "v", "c", "555"];
export function NumberUl() {
  ReactDOM.render(
    <NumberList numbers={numberStrs} />,
    document.getElementById("root")
  );
}

// 兄弟元素间 Key 需要唯一（非全局唯一） ，但是不同的组件元素 key 是可以相同的
function Blog(props) {
  const sidebar = (
    <ul>
      {/* JSX 允许在大括号中嵌入任何表达式，所以我们可以在 map() 中这样使用： */}
      {props.posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." }
];
export function ComponentList() {
  ReactDOM.render(<Blog posts={posts} />, document.getElementById("root"));
}
