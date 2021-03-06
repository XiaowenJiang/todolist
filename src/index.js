// import React语法
import React from 'react';
//把App组件挂载在dom上
import ReactDOM from 'react-dom';
// App 组件，大写字母开头
import TodoList from './TodoList';
// PWA progressive web application
import * as serviceWorker from './serviceWorker';
import './style.css';

//jsx语法，可以在React中直接使用标签
ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
