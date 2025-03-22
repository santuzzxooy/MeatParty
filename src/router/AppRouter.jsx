import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Tickets from '../pages/Tickets'
import SignIn from '../pages/SignIn'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/MeatParty' element={<Home/>} />
      <Route path='/MeatParty/tickets' element={<Tickets/>} />
      <Route path='/MeatParty/ingresar' element={<SignIn/>} />
      <Route path='/*' element={<NotFound/>} />
    </Routes>
  )
}

export default AppRouter