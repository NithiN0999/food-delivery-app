import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Food from './pages/Food'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Footer from './components/footer/Footer'
import SignupForm from './components/UI/signup/signup'
import Login from './components/UI/signin/signin'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/food' element = {<Food/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/signup' element = {<SignupForm/>}/>
        <Route path='/signin' element = {<Login/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
