
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import RoutesApp from "./routes/routes"
import Footer from "./components/Footer"
import Header from "./components/Header"
function App() {
  return (
    <Router>
      <Header/>
      <RoutesApp/>
      <Footer/>
   </Router>
  )
}

export default App
