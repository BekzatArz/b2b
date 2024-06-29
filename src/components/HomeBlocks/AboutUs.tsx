import '../../styles/Home/AboutUs.css'
import clients from '../../assets/clients.svg'
import zav from '../../assets/zav.svg'

const AboutUs = () => {
  return (
    <div className='about-us' id='about-us'>
        <h2>О нас</h2>
        <p>Наш сервис “Payteam” предоставляет удобное и быстрое решение для оплаты чаевых в заведениях. С помощью QR-кода ваши клиенты могут легко и безопасно поблагодарить сотрудников в виде безналичных чаевых.</p>
        <div className='about-us__blocks'>
            <div className="about-us__block">
                <p>Клиенты</p>
                <img src={clients} width={180} alt="" />
                <p>Удобный и современный способ оплаты чаевых, возможность оставить чаевые без наличных.</p>
            </div>
            <div className="about-us__block">
                <p>Заведения</p>
                <img src={zav} width={180}  alt="" />
                <p>Cнижение нагрузки на персонал, улучшение клиентского сервиса, прозрачность оплаты чаевых для сотрудников.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs