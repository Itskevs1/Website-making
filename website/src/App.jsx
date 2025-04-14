import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Store from './pages/Store/Store'
import About from './pages/About/About'

import Feedback from './componentsa/FeedBacks/Feedback'
import Contacts from './pages/Contact/Contacts'
import Frequently from './componentsa/Frequently/Frequently'




const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar />
      <div className="containerr">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stores' element={<Store/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/contact-us' element={<Contacts/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/faq' element={<Frequently/>}/>
      </Routes>
      </div>
    </div>
   
    </>
  )
}

export default App
