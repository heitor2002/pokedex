import './App.css'
import Pokelist from './components/PokeList'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SinglePokemon from './components/SinglePokemon'
import Header from './components/Header'

function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Pokelist />} />
        <Route path='/pokemon/:id' element={<SinglePokemon />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
