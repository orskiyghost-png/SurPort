import { roles } from '../data/site'

export default function Roles() {
  return (
    <section className="section" id="roles">
      <div className="container">
        <h2 className="section__title">Роли</h2>
        <p className="section__lead">
          Один и тот же агент спрашивает по-разному. Набор вопросов зависит от того,
          кто вы и какая задача на столе.
        </p>
        <div className="cards cards--2">
          {roles.map((role) => (
            <article key={role.title} className="card card--role">
              <h3 className="card__title">{role.title}</h3>
              <p className="card__text">{role.text}</p>
              <p className="card__output">{role.output}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
