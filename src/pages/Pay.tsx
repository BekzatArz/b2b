import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/Pay/Pay.css';
import { v4 as uuidv4 } from 'uuid'; // Используем деструктуризацию для импорта v4
import { useNavigate } from 'react-router-dom';

interface PayState {
  price: string;
  tips: string;
  waiter: {
    name: string,
    id?: string
  };
}

const useOutsideClick = (ref: React.RefObject<HTMLDivElement>, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

const Pay: React.FC = () => {
  const [text, setText] = useState<PayState>({ price: '', tips: '', waiter: { name: 'Официант' } });
  const [total, setTotal] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate()
  const selectWrapperRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const priceValue = parseFloat(text.price) || 0;
    const tipsValue = parseFloat(text.tips) || 0;
    setTotal(priceValue + tipsValue);
  }, [text.price, text.tips]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value
      .replace(/[^\d.]/g, '')
      .replace(/^(\d{1,6})(\.\d{0,2})?.*$/, '$1$2');

    if (name === 'price' && parseFloat(newValue) > 90000) {
      setError('Нельзя переводить больше 90000 сомов');
    } else if (name === 'tips' && parseFloat(newValue) > 9999) {
      setError('Чаевые не могут превышать 9999 сомов');
    } else if (parseFloat(newValue) > 99999) {
      setError('Общая сумма не может превышать 100000 сомов');
    } else {
      setText(prevState => ({ ...prevState, [name]: newValue }));
      setError('');
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (waiter: { name: string, id: string }) => {
    setText(prevState => ({
      ...prevState,
      waiter: { name: waiter.name, id: waiter.id }
    }));
    setIsOpen(false);
  };

  const handlePay = () => {
    const { price, waiter } = text;

    if (!price || !waiter.id) {
      setError('Все поля должны быть заполнены!');
      return;
    }

    setError('');
    navigate('/success')
    
  };

  const waiters = [
    { name: 'Осси', id: uuidv4() },
    { name: 'Бежа', id: uuidv4() },
    { name: 'Бакдоолот', id: uuidv4() },
    { name: 'Азат', id: uuidv4() }
  ];

  useOutsideClick(selectWrapperRef, () => {
    setIsOpen(false);
  });

  return (
    <>
      <div className="pay-team"><span style={{color: 'yellow'}}>Pay</span> Team</div>
      <div className="money">
        <input
          type="text"
          name="price"
          inputMode="numeric"
          value={text.price}
          onChange={handleChange}
          placeholder="Счет"
        />
        <input
          type="text"
          name="tips"
          inputMode="numeric"
          value={text.tips}
          onChange={handleChange}
          placeholder="Чаевые"
        />
        <div className="select-wrapper" ref={selectWrapperRef}>
          <motion.div
            className="custom-select"
            onClick={handleToggle}
            whileHover={{ scale: 1.05, userSelect: 'none' }}
            whileTap={{ scale: 0.95, userSelect: 'none' }}
            style={{ userSelect: 'none' }}
          >
            {text.waiter.name || 'Официант'}
            <motion.div
              className="triangle"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div
            ref={optionsRef}
            className="options"
            style={{ userSelect: 'none' }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {waiters.map(waiter => (
              <motion.div
                key={waiter.id}
                className={`option ${text.waiter.id === waiter.id ? 'active' : ''}`}
                onClick={() => handleSelect(waiter)}
                whileHover={{ backgroundColor: '#000000', userSelect: 'none' }}
              >
                {waiter.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="pay-select">
          {error && <p className="error">{error}</p>}
            <div className="total">
              <p>Итого:</p>
              <span className={total > 0 ? 'total-price' : 'total-zero'}>{total.toFixed(2)} сом</span>
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
