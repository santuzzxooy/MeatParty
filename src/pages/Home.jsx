import ParticlesComponent from '../components/Particles'
import Header from '../components/Header'
import Banner from '../components/Banner'
import InitCard from '../components/InitCard'
import Telegram from '../components/Telegram'
import Footer from '../components/Footer'
import '../App.css'

function Home() {
  return (
    <div>
      <ParticlesComponent id='particles'/>
      <Telegram />
      <Header />
      <Banner />
      <InitCard />
      <InitCard />
      <InitCard />
      <Footer />
    </div>
  )
}

export default Home