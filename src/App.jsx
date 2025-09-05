import './App.css'
import { Route,Routes } from 'react-router'
import NavigasiBar from './layouts/Navigasibar'
import Home from './pages/Home'
import Footer from './layouts/Footer'
function App() {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen'>
      <NavigasiBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
