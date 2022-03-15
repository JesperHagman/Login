import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginPage from "./components/pages/LoginPage"
import RegisterPage from "./components/pages/RegisterPage"

function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
       <Route path="/" element={<LoginPage />} ></Route>
       <Route path="/about" element={<RegisterPage />} ></Route>
       <Route path="*" element={<LoginPage />} ></Route>
     </Routes>
    </div>
    </Router>
  )
}

export default App;
