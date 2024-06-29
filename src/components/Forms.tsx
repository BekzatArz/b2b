import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = e.target.value;
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.trim().length === 0) {
      let a: string = name.charAt(0).toUpperCase() + name.slice(1);
      e.target.placeholder = a;
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const correctEmail = '1';
    const correctPassword = '1';

    if (formValues.email.trim() === correctEmail && formValues.password === correctPassword) {
      navigate('/profile');
      onClose();
    } else {
      alert('Incorrect email or password');
    }
  };

  return (
    <form autoComplete="off">
      <div>
        <h1 style={{ color: '#29D728' }}>Pay</h1>
        <h2>team</h2>
        {['email', 'password'].map((field) => (
          <div className="input-container" key={field}>
            <input
              type={field === 'password' ? 'password' : 'text'}
              autoComplete="off"
              name={field}
              value={formValues[field as keyof typeof formValues] || ''}
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
  );
};

const RegisterForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formValues, setFormValues] = useState({
    zavedenie: '',
    full_name: '',
    address: '',
    email: '',
    number: ''
  });

  const navigate = useNavigate();

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = e.target.value;
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.trim().length === 0) {
      let a: string = name.charAt(0).toUpperCase() + name.slice(1);
      e.target.placeholder = a;
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    navigate('/nn');
    onClose();
  };

  return (
    <form autoComplete="off">
      <input type="text" style={{ display: 'none' }} />
      <input type="password" style={{ display: 'none' }} />
      <div>
        <h1 style={{ color: '#29D728' }}>Pay</h1>
        <h2>team</h2>
        {['zavedenie', 'full_name', 'address', 'email', 'number'].map((field) => (
          <div className="input-container" key={field}>
            <input
              type="text"
              autoComplete="off"
              name={field}
              value={formValues[field as keyof typeof formValues] || ''}
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
  );
};

export { LoginForm, RegisterForm };
