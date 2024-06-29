import '../../styles/Home/Sorry.css'

import zakaz from '../../assets/zakaz.png'
import checks from '../../assets/checks.svg'
import React from 'react'

const Sorry:React.FC<{onClose: () => void}> = ({onClose}) => {
  return (
    <div className='sorry' id='sorry'>
        <div className="sorry-block">
            <h1>Устал слышать “Извините, у меня нет <span style={{color: 'red'}}>наличных</span>”?</h1>
            <p style={{marginTop: '22px'}}>Представьте: довольный клиент хочет отблагодарить вас чаевыми, но у него нет наличных, а перевод делать неудобно. Знакомо?</p>
            <p style={{marginTop: '39px', fontSize: '23px'}}>Решите проблему с помощью <span style={{color: '#29D728'}}>QR-кода</span> для чаевых!</p>
            <div className='checks-cons'>
                <img src={checks} alt="check" width={26} />
                <div className='checks__p'>
                    <p>Просто и удобно: Клиент сканирует код камерой смартфона и мгновенно переводит чаевые на вашу карту.</p>
                    <p>Больше чаевых: Люди охотнее оставляют чаевые, когда это легко и быстро.</p>
                    <p>Своевременный имидж: Покажите клиентам, что вы идете в ногу со временем.</p>
                </div>
            </div>
            <button onClick={onClose}>Оставить заявку</button>
        </div>
        <img src={zakaz} alt="zakaz" />
    </div>
  )
}

export default Sorry