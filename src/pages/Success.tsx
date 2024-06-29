import gopay from '../assets/gopay.png'
import '../styles/Success/Success.css'
const Success = () => {

  return (
    <div className="success" style={{marginTop: '100px'}}>
        <h2 style={{textAlign: 'center', fontWeight: 200}}>Оплатить:</h2>
        <div style={{marginTop:'20px',display: 'flex', justifyContent:'center', alignItems: 'center', padding: '10px', border: 'solid 1px white', borderRadius: '10px', backgroundColor: '#222222'}}>
            <img src={gopay}width={200} alt="" />
        </div>
    </div>
  )
}

export default Success