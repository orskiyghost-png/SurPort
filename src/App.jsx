import SilkBackground from './components/SilkBackground'
import Hero from './sections/Hero'
import Explore from './sections/Explore'
import Models from './sections/Models'
import HowItWorks from './sections/HowItWorks'
import Roles from './sections/Roles'
import Results from './sections/Results'

export default function App() {
  return (
    <>
      <SilkBackground />
      <main className="app">
        <Hero />
        <Explore />
        <Models />
        <HowItWorks />
        <Roles />
        <Results />
        <footer className="footer">
          <div className="container">
            <span>SurPort · ИИ-агент для сбора данных</span>
            <a href="https://github.com/orskiyghost-png/SurPort">Исходный код</a>
          </div>
        </footer>
      </main>
    </>
  )
}
