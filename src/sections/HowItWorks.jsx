import { steps } from '../data/site'

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <h2 className="section__title">Как это работает</h2>
        <p className="section__lead">
          Четыре шага. Агент не ждёт готового промта — он собирает его сам из ваших
          ответов и роли.
        </p>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.number} className="step">
              <span className="step__number">{step.number}</span>
              <div className="step__body">
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
