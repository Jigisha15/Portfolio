import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import About from './pages/About/About'

import './App.css'

function App() {
  return (
    <div className="App">
      {/* <h1>Shree Ganesh</h1> */}
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/home"
            Component={Home}
          />
          <Route
            path="/about"
            Component={About}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
