import SilkBackground from './components/SilkBackground'
import SpecularButton from './components/SpecularButton'

export default function App() {
  return (
    <>
      <SilkBackground />
      <main className="app">
        <section className="hero">
          <div className="hero__content">
            <h1 className="hero__title">SurPort</h1>
            <p className="hero__lead">
              Личное портфолио: проекты, опыт и то, как я работаю.
            </p>
            <div className="hero__actions">
              <SpecularButton>Смотреть работы</SpecularButton>
              <SpecularButton
                tint="#ffffff"
                tintOpacity={0.1}
                blur={10}
                lineColor="#ffffff"
                baseColor="#525252"
                intensity={0.7}
                idleIntensity={0.2}
              >
                Связаться
              </SpecularButton>
            </div>
          </div>
        </section>
        <section className="placeholder">
          <p>Следующие секции</p>
        </section>
      </main>
    </>
  )
}
