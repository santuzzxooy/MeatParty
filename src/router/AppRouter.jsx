import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='/*' element='<h1>sajkdfjasdjlfja</h1>' />
    </Routes>
  )
}

export default AppRouter