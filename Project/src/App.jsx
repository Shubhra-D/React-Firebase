
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './src/components/Chakra/features/Navbar'
import Signup from './src/components/Chakra/features/Signup'
import Dashboard from './pages/Dashboard'
import Login from './src/components/Chakra/features/Login'

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      
      </Routes>
    </>
  )
}

export default App
