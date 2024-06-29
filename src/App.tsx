import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App/App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Pay from './pages/Pay';
import Popup from './components/Popup/Popup';
import Success from './pages/Success';
import Footer from './components/Footer/Footer';
import { LoginForm, RegisterForm } from './components/Forms';
import Profile from './components/Profile';

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showReg, setShowReg] = useState<boolean>(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleReg = () => {
    setShowReg(!showReg);
  };

  return (
    <div className='app'>
      <Router>
        <Header setShowPopup={setShowPopup} onClose={togglePopup} />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home onClose={toggleReg} />} />
            <Route path='/success' element={<Success />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/pay' element={<Pay />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
          <Popup show={showPopup} onClose={togglePopup}>
            <LoginForm onClose={togglePopup} />
          </Popup>
          <Popup show={showReg} onClose={toggleReg}>
            <RegisterForm onClose={toggleReg} />
          </Popup>
        </div>
      </Router>
    </div>
  );
};

export default App;
