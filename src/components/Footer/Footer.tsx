import { NavLink, useLocation } from 'react-router-dom'

import '../../styles/Footer/Footer.css'
import whats from '../../assets/whatsapp.png'

const Footer = () => {
    const location = useLocation()
  return (
    <footer id='footer' style={{display: location.pathname === '/pay' || location.pathname === '/success' ? 'none' : 'grid'}}>
        <h1><span>Pay</span><br /> team</h1>
        <div className='footer__nav'>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/about'>О нас</NavLink>
            <NavLink to='/uslugi'>Услуги</NavLink>
            <NavLink to='/contacts'>Контакты</NavLink>
        </div>
        <div className="footer__info">
            <div>
                <h3>Email:</h3>
                <p>admin@gmail.com</p>
            </div>
            <div>
                <h3>Телефон:</h3>
                <p>admin@gmail.com</p>
            </div>
            <div>
                <h3>Адрес:</h3>
                <p>admin@gmail.com</p>
            </div>
        </div>
        <div>
            <img src={whats} alt="" />
        </div>
    </footer>
  )
}

export default Footer