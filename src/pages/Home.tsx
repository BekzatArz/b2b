import '../styles/Home/Home.css'

import phone from '../assets/Frame 29.svg'

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='home-info'>
          <h1 style={{marginTop: "-100px"}}><span style={{color: '#FFE743'}}>QR-коды:</span> мост между офлайн и онлайн миром</h1>
          <p style={{marginTop: '50px'}}>В современном мире, где информация правит балом, а время-ценнейший ресурс, QR-коды стали незаменимым инструментом для быстрого и удобного обмена данными. </p>
        </div>
        <img width={700} src={phone} alt="" />
      </div>       
    </>
  )
}

export default Home