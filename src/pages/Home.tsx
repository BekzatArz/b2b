import '../styles/Home/Home.css'

import phone from '../assets/Frame 29.svg'
import HomeBlocks from '../components/HomeBlocks/HomeBlocks'
import AboutUs from '../components/HomeBlocks/AboutUs'
import Sorry from '../components/HomeBlocks/Sorry'

const Home:React.FC<{onClose: () => void}> = ({onClose}) => {
  return (
    <>
      <div className='home'>
        <div className='home-info' style={{marginBottom: ''}}>
          <h1 style={{marginTop: "-100px"}}><span style={{color: '#29D728'}}>QR-коды:</span> мост между офлайн и онлайн миром</h1>
          <p style={{marginTop: '50px'}}>В современном мире, где информация правит балом, а время-ценнейший ресурс, QR-коды стали незаменимым инструментом для быстрого и удобного обмена данными. </p>
          <button onClick={onClose}>Зарегистрироваться</button>
        </div>
        <img width={700} src={phone} alt="" />
      </div>       
      <HomeBlocks />
      <AboutUs />
      <Sorry onClose={onClose}/>
    </>
  )
}

export default Home