import { types, destroy, getParent } from "mobx-state-tree"

import TimeTraveller from "mobx-state-tree/middleware/TimeTraveller"
import UndoManager from "mobx-state-tree/middleware/UndoManager"

export const Todo = types
    .model({
        text: "stuff",
        completed: false,
        id: types.number
    })
    .actions(self => ({
        complete() {
            self.completed = !self.completed
        },
        edit(newText) {
            self.text = newText
        },
        remove() {
            getParent(self, 2).removeTodo(self)
        }
    }))

export const Store = types
    .model({
        filter: types.enumeration("filter", ["all", "active", "completed"]),
        todos: types.array(Todo),
        // history: types.optional(TimeTraveller, { targetPath: "../todos" })
        history: types.optional(UndoManager, {})
    })
    .views(self => ({
        get activeCount() {
            return self.todos.filter(todo => todo.completed === true).length
        },
        get filteredTodos() {
            switch (self.filter) {
                case "all":
                    return self.todos
                case "active":
                    return self.todos.filter(todo => !todo.completed)
                case "completed":
                    return self.todos.filter(todo => todo.completed)
            }
        }
    }))
    .actions(self => ({
        addTodo(text) {
            self.todos.push({ text, id: Math.random() })
        },
        removeTodo(todo) {
            destroy(todo)
        },
        setFilter(filter) {
            self.filter = filter
        },
        clearCompleted() {
            self.todos = self.todos.filter(todo => !todo.completed)
        }
    }))
