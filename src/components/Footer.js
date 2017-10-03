import React from "react"
import classnames from "classnames"
import { observer } from "mobx-react"

const Footer = ({ store }) => (
    <footer className="footer">
        <span className="todo-count">
            <strong>{store.activeCount}</strong> items left
        </span>
        <ul className="filters">
            {["all", "active", "completed"].map(filter => (
                <FilterLink
                    key={filter}
                    store={store}
                    filter={filter}
                    selected={filter === store.filter}
                />
            ))}
        </ul>
        <button className="clear-completed" onClick={store.clearCompleted}>
            Clear completed
        </button>
    </footer>
)

const FilterLink = ({ store, filter, selected }) => (
    <li>
        <a
            className={classnames({ selected })}
            style={{ cursor: "pointer" }}
            onClick={() => store.setFilter(filter)}
        >
            {filter}
        </a>
    </li>
)

export default Footer
