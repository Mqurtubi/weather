import './App.css'
import { getWeather,getForecastWeather } from './api/weather'
import { Route,Routes } from 'react-router'
import NavigasiBar from './layouts/Navigasibar'
import Home from './pages/Home'
function App() {
  return (
    <div className='bg-linear-to-r from-cyan-500 to-blue-500 min-h-screen'>
      <NavigasiBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
