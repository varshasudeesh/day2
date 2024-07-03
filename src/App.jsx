import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { View } from './components/View'
import { Add } from './components/Add'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Customcard } from './components/Customcard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/'element={<View/>}></Route>
        <Route path='/add' element={<Add person={{name:'Maya',
    email:'m@gmail.com',
    password:'frfgrg',
    address:'rwgreheh'}}/>}></Route>
        <Route path='/customcard' element={<Customcard/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
