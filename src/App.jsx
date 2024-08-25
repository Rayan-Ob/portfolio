import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/homePage/HomePage'
import DetailsPage from './pages/DetailsProject/DetailsPage'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {

  return (
    < div className='body-color'>
      <Navbar></Navbar>
      
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<HomePage ></HomePage>}/>
          <Route path='/details/:id' element={<DetailsPage />}></Route>

        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  )
}

export default App
