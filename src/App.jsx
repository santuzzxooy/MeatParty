import './App.css'
import ParticlesComponent from './components/Particles'
import Header from './components/Header'
import Card from './components/Card'
import Telegram from './components/Telegram'

function App() {
  return (
    <div>
      <ParticlesComponent id='particles'/>
      <Telegram />
      <Header />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default App