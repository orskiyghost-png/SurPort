import SpecularButton from '../components/SpecularButton'

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__content">
        <p className="hero__kicker">SurPort · ИИ-агент</p>
        <h1 className="hero__title">
          Данные, которые агент собирает сам
        </h1>
        <p className="hero__lead">
          Подключите ключ провайдера, выберите модель и опишите задачу. Агент соберёт
          опросник под вашу роль, задаст только нужные вопросы и отдаст результат
          в готовом виде: таблица, документ, чек-лист.
        </p>
        <div className="hero__actions">
          <SpecularButton onClick={() => scrollTo('how')}>Как это работает</SpecularButton>
          <SpecularButton
            tint="#ffffff"
            tintOpacity={0.1}
            blur={10}
            lineColor="#ffffff"
            baseColor="#525252"
            intensity={0.7}
            idleIntensity={0.2}
            onClick={() => scrollTo('models')}
          >
            Модели
          </SpecularButton>
        </div>
      </div>
      <p className="hero__hint">Листайте вниз или откройте карту проекта</p>
    </header>
  )
}
