import React, { Component } from "react"
import classnames from "classnames"

class Footer extends Component {
    render() {
        const { store } = this.props
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{store.activeCount}</strong> items left
                </span>
                <ul className="filters">
                    {["all", "active", "completed"].map(filter => (
                        <li key={filter}>{this.renderFilterLink(filter)}</li>
                    ))}
                </ul>
                <button className="clear-completed" onClick={store.clearCompleted}>
                    Clear completed
                </button>
            </footer>
        )
    }

    renderFilterLink(filter) {
        const { store } = this.props
        return (
            <a
                className={classnames({ selected: filter === store.filter })}
                style={{ cursor: "pointer" }}
                onClick={() => store.setFilter(filter)}
            >
                {filter}
            </a>
        )
    }
}

export default Footer
