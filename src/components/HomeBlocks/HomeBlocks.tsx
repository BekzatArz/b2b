import '../../styles/Home/HomeBlocks.css'

import exQr1 from '../../assets/ex-qr.svg'
import exQr2 from '../../assets/table-qr.svg'
import exQr3 from '../../assets/scan-qr.svg'
import exQr4 from '../../assets/check-qr.svg'




const HomeBlocks = () => {
  return (
    <div className='home-info-blocks' id='uslugi'>
        <div className="info-block info-block-1">
            <img src={exQr1} alt="" width={180} />
            <div>
                <h3>№1</h3>   
                <p>Вы можете сгенерировать QR-code и распечатать его</p> 
            </div> 
        </div>
        <div className="info-block info-block-2">
            <div>
                <h3>№2</h3>
                <p>Разложите его по столикам или распределите между официантами</p>
            </div> 
            <img src={exQr2} alt="" width={180} />
        </div>
        <div className="info-block info-block-1">
            <img src={exQr3} alt="" width={180} />
            <div>
                <h3>№3</h3>
                <p>Посетитель сканирует QR-код расположенный на столе</p>
            </div> 
        </div>
        <div className="info-block info-block-2">
            <div>
                <h3>№4</h3>
                <p>Посетитель выбирает сумму чаевых
                и производит оплату</p>
            </div>
            <img src={exQr4} alt="" width={180} />
        </div>
    </div>
  )
}

export default HomeBlocks