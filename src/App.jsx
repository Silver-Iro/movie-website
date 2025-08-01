import Home from './pages/Home'
import { Routes, Route} from "react-router-dom"
import { MovieProvider } from './context/MovieContext'
import NavBar from './components/NavBar'
import Favorites from './pages/Favourites'
import './css/App.css'

function App() {
  return (
    <MovieProvider>
      <div>
        <NavBar/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
          </Routes>
        </main>
      </div>
    </MovieProvider>
    
  )
}

export default App
