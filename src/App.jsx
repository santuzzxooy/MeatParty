import './App.css'
import ParticlesComponent from './components/Particles'
import Header from './components/Header'
import InitCard from './components/InitCard'
import Telegram from './components/Telegram'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <ParticlesComponent id='particles'/>
      <Telegram />
      <Header />
      <InitCard/>
      <Footer />
    </div>
  )
}

export default App