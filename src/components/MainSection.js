import React from "react"
import TodoItem from "./TodoItem"
import Footer from "./Footer"
import { observer } from "mobx-react"

const MainSection = ({ store }) => (
    <section className="main">
        <ul className="todo-list">
            {store.filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
        {store.todos.length && <Footer store={store} />}
    </section>
)

export default observer(MainSection)
