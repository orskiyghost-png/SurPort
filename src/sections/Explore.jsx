import BranchedMenu from '../components/BranchedMenu'
import { navSections } from '../data/site'

const jump = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Explore({ active, onActive }) {
  return (
    <section className="section explore" id="overview">
      <div className="container explore__grid">
        <div className="explore__intro">
          <h2 className="section__title">Карта проекта</h2>
          <p className="section__lead">
            Меню — оглавление. Откройте ветвь и выберите пункт: страница прокрутится
            к нужному разделу.
          </p>
          <p className="section__note">
            Сайт показывает, как работает агент: от подключения провайдера до готового
            результата. Ниже — каждая часть по порядку.
          </p>
        </div>
        <div className="explore__menu">
          <BranchedMenu
            items={navSections}
            defaultOpen={[0, 1]}
            defaultActive={active}
            onSelect={(value) => {
              onActive?.(value)
              jump(value)
            }}
            color="#ffffff"
            accentColor="#d796a2"
            lineColor="rgba(255, 255, 255, 0.24)"
            width={280}
            rowHeight={38}
            indent={44}
            trunk={14}
            radius={10}
            lineWidth={1.5}
            fontSize={15}
          />
        </div>
      </div>
    </section>
  )
}
