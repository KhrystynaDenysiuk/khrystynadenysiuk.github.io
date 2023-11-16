import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './style/reset.scss'
import './App.scss';
import './style/__fonts.scss';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Works from './components/Works/Works';
import history  from './history';

const App = () => {

  useEffect(() => {
    history.push('/');
  }, []);
  
  return (
    <BrowserRouter history={history}>
      <div className="mainWrapper">
        <Menu />
        <div className="container">
          <Profile />
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/works' element={<Works />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;