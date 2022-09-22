import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./components/@pages"
import Movie from "./components/@pages/movie"

import "./styles.css"

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Movie />} />
        </Routes>
      </Router>
    </div>
  )
}
