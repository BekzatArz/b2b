import { NavLink, useLocation } from "react-router-dom"

import human from '../../assets/human.svg'
import '../../styles/Header/Header.css'

const Header = () => {
    const location = useLocation()

  return (
    <header style={{display: location.pathname === '/pay' ? 'none' : 'flex'}}>
        <div className="logosContain">
            <h3>Pay Team</h3>
        </div>
        <nav>
            <ul>
                <li className={location.pathname === '/'? 'active': ''}><NavLink to='/'>Главная</NavLink></li>
                <li className={location.pathname === '/about'? 'active': ''}><NavLink to='/about'>О нас</NavLink></li>
                <li className={location.pathname === '/uslugi'? 'active': ''}><NavLink to='/uslugi'>Услуги</NavLink></li>
                <li className={location.pathname === '/contacts'? 'active': ''}><NavLink to='/contacts'>Контакты</NavLink></li>
                <li><NavLink to='/pay'>Pay</NavLink></li>
            </ul>
        </nav>
        <div className="header-ending">
          <img src={human} width={30} alt="profile" />
        </div>
    </header>
  )
}

export default Header