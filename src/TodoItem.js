import React, { Component } from 'react'

// 子组件想与父组件通信要利用父组件传过来的函数
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        const { remove, index } = this.props;
        remove(index);
    }

    render() {
        const { content } = this.props;
        return (
            <div onClick={this.handleDelete}>{content}</div>
        )
    }
}

export default TodoItem;