import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MoviePage from './pages/MoviePage'

function App() {
  return (
    <div className='w-full h-full'>
      <BrowserRouter>
        <Routes>
          <Route path='/movie/:id' element={<MoviePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
