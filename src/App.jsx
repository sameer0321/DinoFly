import './App.css'
import AboutSection from './components/AboutSection'
import Accordian from './components/Accordion'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Preloader from './components/Preloader'
import Roadmap from './components/Roadmap'
import Tekonomics from './components/Tekonomics'
import UtilitySection from './components/UtilitySection'

function App() {

  return (
    <div>
      <Preloader />
      <BackToTop />
      <HeroSection />
      <AboutSection />
      <Tekonomics />
      <UtilitySection />
      <Roadmap />
      <Accordian />
      <Footer />
    </div>
  )
}

export default App
