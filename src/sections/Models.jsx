import { models } from '../data/site'

export default function Models() {
  return (
    <section className="section" id="models">
      <div className="container">
        <h2 className="section__title">Модели</h2>
        <p className="section__lead">
          Одна платформа, разные характеры. Модели названы одним именем и отличаются
          тем, как собирают и подают данные.
        </p>
        <div className="cards cards--3">
          {models.map((model) => (
            <article
              key={model.name}
              className="card"
              data-featured={model.featured ? '' : undefined}
            >
              <div className="card__head">
                <h3 className="card__title">{model.name}</h3>
                <span className="card__tag">{model.tag}</span>
              </div>
              <p className="card__text">{model.text}</p>
              <ul className="card__list">
                {model.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
