import React from "react"
import { render } from "react-dom"
import App from "./components/App"
import "todomvc-app-css/index.css"

const initialState = {
    filter: "all",
    todos: [
        {
            text: "find an excuse to go to Verona",
            completed: false,
            id: 0
        },
        {
            text: "kiss lover at the Romeo & Julia  balcony",
            completed: false,
            id: 1
        }
    ]
}

render(<App store={initialState} />, document.getElementById("root"))
