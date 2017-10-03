import React, { Component } from "react"
import classnames from "classnames"
import TodoTextInput from "./TodoTextInput"
import { observer } from "mobx-react"

class TodoItem extends Component {
    state = {
        editing: false
    }

    handleDoubleClick = () => {
        this.setState({ editing: true })
    }

    handleSave = (id, text) => {
        const { todo } = this.props
        if (text.length === 0) {
            todo.remove()
        } else {
            todo.edit(text)
        }
        this.setState({ editing: false })
    }

    render() {
        const { todo } = this.props

        const element = this.state.editing ? (
            <TodoTextInput
                text={todo.text}
                editing={this.state.editing}
                onSave={text => this.handleSave(todo.id, text)}
            />
        ) : (
            <div className="view">
                <input className="toggle" type="checkbox" checked={todo.completed} />
                <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
                <button className="destroy" onClick={todo.remove} />
            </div>
        )

        return (
            <li
                className={classnames({
                    completed: todo.completed,
                    editing: this.state.editing
                })}
            >
                {element}
            </li>
        )
    }
}

export default TodoItem
