import React, { Component } from 'react';
import TodoItem from './TodoItem';

// define 一个react组件
// extends 是继承的意思
// Component 也是 React.Component
class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }


  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        // 父组件 TodoList, 子组件 TodoItem
        // 父组件通过props的形式向子组件传递参数
        return ( <TodoItem 
                  remove={this.handleDelete}
                  key={index}
                  content={item}
                  index={index}
                  />
        );
      })
    )  
  }

  // 每个widget 一定有个render函数负责显示内容
  render() {
    //jsx语法
    return (
      <div>
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputChange}></input>
        <button onClick={this.handleBtnClick}>add</button>
      </div><ul>{this.getTodoItems()}</ul></div>
    );
  }
}

// 导出App 组件，这样在 Index.js才能导入它
export default TodoList;
