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
      <Card titulo="Evento X"/>
      <Card titulo="Evento X"/>
      <Card titulo="Evento X"/>
      <Card titulo="Evento X"/>
      <Card titulo="Evento X"/>
    </div>
  )
}

export default App