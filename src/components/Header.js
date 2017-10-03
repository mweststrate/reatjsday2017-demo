import React from "react"
import TodoTextInput from "./TodoTextInput"
import { observer } from "mobx-react"

const Header = ({ store }) => {
    const timeTraveller = store.history || {}
    return (
        <header className="header">
            <h1>todos</h1>
            <div className="undoredo">
                <button disabled={!timeTraveller.canUndo} onClick={timeTraveller.undo}>
                    ↩
                </button>
                <button disabled={!timeTraveller.canRedo} onClick={timeTraveller.redo}>
                    ↪
                </button>
            </div>
            <TodoTextInput newTodo onSave={store.addTodo} placeholder="What needs to be done?" />
        </header>
    )
}

export default observer(Header)
