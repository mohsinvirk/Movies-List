import { StrictMode } from "react"
import * as ReactDOMClient from "react-dom/client"
import { Provider } from "react-redux"

import App from "./App"

import { store } from "./store"

const rootElement: any = document.getElementById("root")
const root = ReactDOMClient.createRoot(rootElement)

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
