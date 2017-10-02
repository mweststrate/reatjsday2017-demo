import React, { Component } from "react"
import TodoItem from "./TodoItem"
import Footer from "./Footer"
import { observer } from "mobx-react"

class MainSection extends Component {
    render() {
        const { store } = this.props
        const filteredTodos = store.todos

        return (
            <section className="main">
                {this.renderToggleAll()}
                <ul className="todo-list">
                    {filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
                </ul>
                {store.todos.length && <Footer store={store} />}
            </section>
        )
    }

    renderToggleAll() {
        const { store } = this.props
        if (store.todos.length > 0) {
            return (
                <span>
                    <input
                        className="toggle-all"
                        id="toggle-all"
                        type="checkbox"
                        checked={store.completedCount === store.todos.length}
                        onChange={store.completeAll}
                    />
                    <label htmlFor="toggle-all">Mark all as complete</label>
                </span>
            )
        }
    }
}

export default MainSection
