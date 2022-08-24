import './index.css'
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import { store } from "./app/store"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)

root.render(
  <Provider store={store}>

  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
  </Provider>
)
