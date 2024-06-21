import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App/App.css'
import Header from './components/Header/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Pay from './pages/Pay'

const App = () => {
  return (
    <div className='app'>
        <Router>
          <Header />
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/pay' element={<Pay />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    </div>
  )
}

export default App