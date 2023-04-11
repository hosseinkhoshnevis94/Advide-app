import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import About from './pages/About'
import Home from './pages/Home'
import Search from './pages/Search'
import './App.css'
import Footer from './components/Footer/Footer'
export default function App() {
  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='search' element={<Search/>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  )
}
