import React from "react"
import ReactDOM from "react-dom"
import Main from "./main"
import "bootstrap/dist/css/bootstrap.min.css"
import { BudgetsProvider } from "./contexts/BudgetsContext"

ReactDOM.render(
  <React.StrictMode>
    <BudgetsProvider>
      <Main />
    </BudgetsProvider>
  </React.StrictMode>,
  document.getElementById("root")
)