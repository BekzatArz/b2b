import React, { ChangeEvent, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App/App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Pay from './pages/Pay';
import Popup from './components/Popup/Popup';
import Success from './pages/Success';

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showReg, setShowReg] = useState<boolean>(false);
  const [formValues, setFormValues] = useState({
    zavedenie: '',
    full_name: '',
    address: '',
    email: '',
    number: ''
  });

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleReg = () => {
    setShowReg(!showReg);
  };
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = e.target.value
  }
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.trim().length === 0){
      let a:string = name.charAt(0).toUpperCase() + name.slice(1)
      e.target.placeholder = a
    }
  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.length === 0) {
      let a:string = name.charAt(0).toUpperCase() + name.slice(1)
      e.target.placeholder = a
    }
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(formValues);
  };

  return (
    <div className='app'>
      <Router>
        <Header setShowPopup={setShowPopup} onClose={togglePopup} />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home onClose={toggleReg} />} />
            <Route path='/success' element={<Success />}></Route>
            <Route path='/pay' element={<Pay />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Popup show={showPopup} onClose={togglePopup}>
          <form autoComplete="off">
              <div>
                <h1>Pay</h1>
                <h2>team</h2>
                {['email', 'password'].map((field) => (
                  <div className="input-container" key={field}>
                    <input
                      type="text"
                      autoComplete="off"
                      name={field}
                      value={formValues[field as keyof typeof formValues]}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      className="form-input"
                      required
                    />
                    <label className="form-label">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                  </div>
                ))}
                <button className='form-btn' type="button" onClick={handleSubmit}>Войти</button>
              </div>
            </form>
          </Popup>
          <Popup show={showReg} onClose={toggleReg}>
            <form autoComplete="off">
              <input type="text" style={{ display: 'none' }} />
              <input type="password" style={{ display: 'none' }} />
              <div>
                <h1>Pay</h1>
                <h2>team</h2>
                {['zavedenie', 'full_name', 'address', 'email', 'number'].map((field) => (
                  <div className="input-container" key={field}>
                    <input
                      type="text"
                      autoComplete="off"
                      name={field}
                      value={formValues[field as keyof typeof formValues]}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      className="form-input"
                      required
                    />
                    <label className="form-label">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                  </div>
                ))}
                <button className='form-btn' type="button" onClick={handleSubmit}>Отправить</button>
              </div>
            </form>
          </Popup>
        </div>
      </Router>
    </div>
  );
};

export default App;
