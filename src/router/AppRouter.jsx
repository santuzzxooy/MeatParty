import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Tickets from '../pages/Tickets'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='/tickets' element={<Tickets/>} />
      <Route path='/*' element={<NotFound/>} />
    </Routes>
  )
}

export default AppRouter