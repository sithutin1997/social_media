import React from "react"
import ReactDOM from "react-dom/client"

import { Provider } from "react-redux"
import { store } from "./store/store"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./index.css"
import App from "./App"

import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
