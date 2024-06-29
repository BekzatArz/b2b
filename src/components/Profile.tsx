import { ChangeEvent, useState } from 'react';
import cafe from '../assets/cafe.svg'
import stars from '../assets/stars.svg'
import '../styles/Cafe.css'

interface RegState {
    zav: string;
    full_name: string;
    table_num: string;
    address: string;
  }
  

const Profile = () => {
  const [form, setForm] = useState<RegState>({zav: '', full_name: '', table_num: '', address: ''});
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    
    }
  return (
    <div className="profile">
        <img className="cafe" width="120%" src={cafe} alt="" />
        <img className='stars' src={stars} alt="" />
        <h2 className='zav' style={{fontWeight: 400}}>Заведение №1</h2>
        <div className='qr-gen'>
            <h1 style={{fontSize: '70px'}}><span style={{fontFamily: 'Spicy Rice'}}>Pay</span><br /> team</h1>
            <div className='ar-gen-div'>
                <input name='zav' onChange={handleChange} value={form.zav} type="text" />
                <input name='full_name' onChange={handleChange} value={form.full_name} type="text" />
                <input name='table' onChange={handleChange} value={form.table_num} type="text" />
                <input name='address' onChange={handleChange} value={form.address} type="text" />
            </div>
        </div>
    </div>
  )
}

export default Profile