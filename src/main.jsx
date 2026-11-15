import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/onest'
import '@fontsource-variable/cormorant'
import './style.css'
import FadeContent from './components/FadeContent'
import ScrollFloat from './components/ScrollFloat'
import ScrollReveal from './components/ScrollReveal'
import StarBorder from './components/StarBorder'
import CircularGallery from './components/CircularGallery'
import FlexCarousel from './components/FlexCarousel'

const image = name => `${import.meta.env.BASE_URL}images/${name}.svg`
const galleryImage = name => `${import.meta.env.BASE_URL}images/${name}.png`

const projects = [
  {
    id: 'field', number: '01', name: 'Fieldnotes', category: 'Цифровой журнал',
    detail: 'Редакционный интерфейс для неторопливого чтения',
    alt: 'Концепт журнала Fieldnotes: светлая страница с растительным мотивом',
  },
  {
    id: 'tempo', number: '02', name: 'Tempo', category: 'Motion и интерфейс',
    detail: 'Исследование ритма и движения в интерфейсе',
    alt: 'Концепт Tempo: тёмная страница с графической композицией',
  },
  {
    id: 'forma', number: '03', name: 'Forma', category: 'Дизайн-система',
    detail: 'Визуальный язык: типографика, цвет и форма',
    alt: 'Концепт Forma: экран дизайн-системы с образцами цвета и типографики',
  },
]

const circularItems = projects.map(project => ({ image: galleryImage(project.id), text: project.name, alt: project.alt }))
const flexItems = projects.map(project => ({ src: galleryImage(project.id), title: project.name, alt: project.alt }))

function Gallery() {
  const [mode, setMode] = useState('list')
  const [available, setAvailable] = useState(false)
  const [reduced, setReduced] = useState(true)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(media.matches)
    update()
    media.addEventListener('change', update)
    try {
      const gl = document.createElement('canvas').getContext('webgl2')
      setAvailable(Boolean(gl))
      gl?.getExtension('WEBGL_lose_context')?.loseContext()
    } catch {
      setAvailable(false)
    }
    return () => media.removeEventListener('change', update)
  }, [])

  const interactive = available && !reduced
  const visibleMode = interactive ? mode : 'list'

  return (
    <section className="index-section page-width" aria-labelledby="index-title">
      <div className="section-heading">
        <span className="section-number">03 / Указатель</span>
        <h2 id="index-title">Все исследования</h2>
        <span className="section-aside">Три концепта</span>
      </div>
      <div className="index-body">
        <p className="index-note">Выберите работу или попробуйте другой способ просмотра</p>
        {interactive && (
          <div className="view-controls" role="group" aria-label="Способ просмотра">
            <button type="button" aria-pressed={visibleMode === 'list'} onClick={() => setMode('list')}>Список</button>
            <button type="button" aria-pressed={visibleMode === 'circle'} onClick={() => setMode('circle')}>Фокус</button>
            <button type="button" aria-pressed={visibleMode === 'flex'} onClick={() => setMode('flex')}>Лента</button>
          </div>
        )}
        {visibleMode !== 'list' && (
          <div className="gallery-wrap">
            <p className="gallery-help">Перетащите или используйте клавиши стрелок</p>
            <div className="gallery-canvas">
              {visibleMode === 'circle' ? (
                <CircularGallery items={circularItems} textColor="#242522" bend={1.2} wave={0} shadow={0} itemAspect={1.45} autoScroll={0} openOnClick={false} />
              ) : (
                <FlexCarousel items={flexItems} preset="arch" intro="none" cardHeight={0.65} gap={18} fit="natural" bend={0.08} lensWidth={0.5} lensHeight={0.5} autoplay={false} captureWheel={false} focusOnClick={false} dispersion={0} liquid={0} />
              )}
            </div>
          </div>
        )}
        <ol className="project-index">
          {projects.map(project => (
            <li key={project.id}>
              <a href={`#${project.id}`}>
                <span className="index-number">{project.number}</span>
                <span className="index-name">{project.name}</span>
                <span className="index-category">{project.category}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Project({ project, first }) {
  const visual = (
    <img src={image(project.id)} alt={project.alt} width="1600" height="1100" loading={first ? 'eager' : 'lazy'} />
  )
  return (
    <article className={`project project-${project.id}`} id={project.id}>
      <div className="project-meta">
        <span><span className="red-dot" aria-hidden="true" /> {project.number} / Концепт</span>
        <span>{project.category}</span>
      </div>
      {first ? <div className="project-visual">{visual}</div> : <FadeContent effect="focus" duration={0.65} initialOpacity={0.5} className="project-visual">{visual}</FadeContent>}
      <div className="project-caption">
        <h3>{project.name}</h3>
        <p>{project.detail}</p>
        <a href={image(project.id)} target="_blank" rel="noreferrer" aria-label={`Открыть изображение концепта ${project.name}`}>Открыть изображение <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Перейти к содержимому</a>
      <header className="site-header page-width">
        <a className="identity" href="#top" aria-label="Артём Сурков, наверх">Артём Сурков<span className="identity-dot">.</span></a>
        <span className="header-role">UI/UX & motion designer</span>
        <nav aria-label="Навигация">
          <a href="#work">Работы</a>
          <a href="#about">Обо мне</a>
          <a href="#contact">Контакт <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main id="main">
        <section className="hero page-width" id="top" aria-labelledby="hero-title">
          <div className="hero-top"><span>Портфолио / Артём Сурков</span><span>Дизайн цифрового опыта</span></div>
          <h1 id="hero-title">Интерфейсы<br /><span>в движении</span><span className="hero-period">.</span></h1>
          <div className="hero-bottom">
            <p>UI/UX и motion-дизайнер.<br />Работаю с формой, смыслом и движением.</p>
            <a href="#work" className="down-link">Смотреть работы <span aria-hidden="true">↓</span></a>
          </div>
        </section>
        <section className="work page-width" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <span className="section-number">01 / Работы</span>
            <h2 id="work-title">Выбранные исследования</h2>
            <span className="section-aside">UI/UX & motion · 01—03</span>
          </div>
          <p className="work-intro">Визуальные концепты, созданные для исследования интерфейсов и движения</p>
          {projects.map((project, index) => <Project key={project.id} project={project} first={index === 0} />)}
        </section>
        <section className="about page-width" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <span className="section-number">02 / Обо мне</span>
            <h2 id="about-title">Немного обо мне</h2>
          </div>
          <div className="about-content">
            <p className="about-label">Артём Сурков<br />20 лет</p>
            <ScrollReveal as="p" containerClassName="about-statement" textClassName="about-text" enableBlur={false} baseRotation={0} baseOpacity={0.65} mode="enter" duration={0.6}>
              Мне интересно создавать цифровые пространства, в которых форма и движение помогают содержанию.
            </ScrollReveal>
          </div>
        </section>
        <Gallery />
        <section className="contact page-width" id="contact" aria-labelledby="contact-title">
          <div className="section-heading">
            <span className="section-number">04 / Контакт</span>
            <h2 id="contact-title">На связи</h2>
          </div>
          <div className="contact-content">
            <ScrollFloat as="p" containerClassName="contact-title" textClassName="contact-title-text" splitBy="words" distance={18} stretch={1} ease="power2.out" stagger={0.02}>Обсудим идею?</ScrollFloat>
            <div className="contact-action">
              <p>Напишите мне в Telegram</p>
              <StarBorder as="a" href="https://t.me/bigth" target="_blank" rel="noreferrer" theme="light" backgroundColor="#f3f0e9" textColor="#242522" borderColor="#b8442d" color="#b8442d" glow={0} radius={0} hover="reveal" clickPulse={false} className="contact-link">@bigth <span aria-hidden="true">↗</span></StarBorder>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer page-width"><span>Артём Сурков</span><span>UI/UX & motion</span><a href="#top">Наверх ↑</a></footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
