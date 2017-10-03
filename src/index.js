import React from "react"
import { render } from "react-dom"
import App from "./components/App"
import { Store } from "./models/store"
import { onSnapshot } from "mobx-state-tree"
import { connectReduxDevtools } from "mobx-state-tree/middleware/redux"

import "todomvc-app-css/index.css"

const initialState = localStorage.getItem("store")
    ? JSON.parse(localStorage.getItem("store"))
    : {
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

let store = Store.create(initialState)

onSnapshot(store, snapshot => localStorage.setItem("store", JSON.stringify(snapshot)))

render(<App store={store} />, document.getElementById("root"))

connectReduxDevtools(require("remotedev"), store)

// setInterval(() => {
//     store.history.withoutUndo(() => {
//         store.addTodo("TEST")
//     })
// }, 5000)
