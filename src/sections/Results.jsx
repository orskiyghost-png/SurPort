import { access, outputs } from '../data/site'

export default function Results() {
  return (
    <>
      <section className="section" id="output">
        <div className="container">
          <h2 className="section__title">Форматы</h2>
          <p className="section__lead">
            Результат выбираете до старта: агент подгоняет структуру под формат,
            а не наоборот.
          </p>
          <div className="chips">
            {outputs.map((item) => (
              <div key={item.title} className="chip">
                <h3 className="chip__title">{item.title}</h3>
                <p className="chip__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="access">
        <div className="container">
          <h2 className="section__title">Доступ</h2>
          <p className="section__lead">
            Платформа не хранит ваши данные и не перепродаёт токены. Вы платите
            провайдеру напрямую.
          </p>
          <div className="rows">
            {access.map((item) => (
              <div key={item.title} className="row">
                <h3 className="row__title">{item.title}</h3>
                <p className="row__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
