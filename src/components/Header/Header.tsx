import { NavLink, useLocation } from "react-router-dom"
import {Link} from 'react-scroll'
import human from '../../assets/human.svg'
import '../../styles/Header/Header.css'
import { Dispatch, SetStateAction, useEffect } from "react"

const Header:React.FC<{setShowPopup: Dispatch<SetStateAction<boolean>>,onClose: () => void}> = ({setShowPopup, onClose}) => {
    const location = useLocation()
    useEffect(() => {
      if (location.pathname === '/pay'){
        setShowPopup(false)
      }
    }, [location.pathname])
  return (
    <header style={{display: location.pathname === '/pay' || location.pathname === '/success' ? 'none' : 'flex'}}>
        <div className="logosContain">
            <h3><span style={{color: '#29D728'}}>Pay</span> Team</h3>
        </div>
        <nav>
            <ul>
                <li className={location.pathname === '/'? 'active': ''}><NavLink to='/'>Главная</NavLink></li>
                <li className={location.pathname === '/about'? 'active': ''}><Link to='about-us' spy={true} smooth={true} duration={500}>О нас</Link></li>
                <li className={location.pathname === '/uslugi'? 'active': ''}><Link to='uslugi' spy={true} smooth={true} duration={500}>Услуги</Link></li>
                <li className={location.pathname === '/contacts'? 'active': ''}><Link to='footer' spy={true} smooth={true} duration={500}>Контакты</Link></li>
                <li><NavLink to='/pay'>Pay</NavLink></li>
            </ul>
        </nav>
        <div className="header-ending">
          <img className="profile-icon" onClick={onClose} src={human} width={30} alt="profile" />
        </div>
    </header>
  )
}

export default Header