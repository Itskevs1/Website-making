import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import About from './pages/About/About';
import Feedback from './componentsa/FeedBacks/Feedback';
import Contacts from './pages/Contact/Contacts';
import Frequently from './componentsa/Frequently/Frequently';
import Login from './components/Login/Login';
import Getstartedpage from './pages/Getstartedpage/Getstartedpage';
import Loginpage from './pages/Loginpage/Loginpage';


const App = () => {
  const location = useLocation();

  // Only hide Navbar on this specific route

  const hideNavbarRoutes = ['/Homepage', '/stores',];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);
  return (

    <div className='app'>
      {shouldShowNavbar && <Navbar />}

      <div className="containerr">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stores' element={<Store />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/contact-us' element={<Contacts />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/faq' element={<Frequently />} />
          <Route path='/auth' element={<Login />} />
          <Route path='/get-started' element={<Getstartedpage />} />
          <Route path='/Homepage' element={<Loginpage />} />
          <Route path='/store1' element={<store1 />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
