import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Pay/Pay.css';
import { useNavigate } from 'react-router-dom';
import waiter from '../assets/waiter.png'

interface PayState {
  tips: string;
  waiter: {
    name: string,
    id?: string
  };
}



const Pay: React.FC = () => {
  const [text, setText] = useState<PayState>({ tips: '0', waiter: { name: 'Официант' } });
  const [total, setTotal] = useState<string>('0');

  const [error, setError] = useState<string>('');
  const navigate = useNavigate()

  useEffect(() => {
    setTotal(text.tips);
  }, [text.tips]);

  const handleChange = (summ: string) => {
    let newValue = summ

   
    
      setText(prevState => ({ ...prevState, tips: newValue }));
      setError('');
    
  };

  const handlePay = () => {
    const { tips } = text;

    if (tips === '0') {
      setError('Все поля должны быть заполнены!');
      return;
    }

    setError('');
    navigate('/success')
    
  };

  return (
    <>
      <div className="pay-team"><span style={{color: '#29D728'}}>Pay</span> Team</div>
      <div className="money">
        <div className='summ'>
          <button onClick={() => handleChange('20')}>20</button>
          <button onClick={() => handleChange('50')}>50</button>
          <button onClick={() => handleChange('100')}>100</button>
          <button onClick={() => handleChange('150')}>150</button>
        </div>
        <input
          type="text"
          name="tips"
          inputMode="numeric"
          value={text.tips}
          placeholder="Чаевые"
          disabled={true}
        />
        <div className='waiter'>
          <img src={waiter} width={100} alt="официант" />
          <div className='waiter__info'>
            <h4>Александрова Полина </h4>
            <p>Официант</p>

          </div>
        </div>
        <div className="pay-select">
          {error && <p className="error">{error}</p>}
            <div className="total">
              <p>Итого:</p>
              <span className={total !== '0' ? 'total-price' : 'total-zero'}>{total} сом</span>
            </div>
            <motion.button
              className="pay-button"
              onClick={handlePay}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Оплатить
            </motion.button>
            </div>
        </div>
    </>
  );
};

export default Pay;
