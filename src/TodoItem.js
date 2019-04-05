import React from 'react'

// 子组件想与父组件通信要利用父组件传过来的函数
class TodoItem extends React.Component {
    handleDelete() {
        this.props.delete(this.props.index);
    }

    render() {
        return (
            <div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>
        )
    }
}

export default TodoItem;