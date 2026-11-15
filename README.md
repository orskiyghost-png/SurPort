# SurPort

Личное сайт-портфолио на React + Vite. Тёмный фон — анимированный WebGL «шёлк», закреплённый на месте при скролле.

## Структура

```
public/
  images/            статические изображения
src/
  assets/images/     изображения, импортируемые в компоненты
  components/        переиспользуемые компоненты (Silk, SilkBackground)
  sections/          секции страницы (hero, about, projects, contact)
  data/              контент и данные портфолио
  hooks/             общие React-хуки
  styles/            вынесенные стили
  App.jsx            корневой компонент
  main.jsx           точка входа
  index.css          базовые стили и слои фона
```

Описание компонентов и правил проекта — в [COMPONENTS.md](./COMPONENTS.md).

## Скрипты

```bash
npm run dev      # dev-сервер
npm run build    # production-сборка
npm run preview  # предпросмотр сборки
npm run lint     # oxlint
```

## Деплой

Push в `main` запускает GitHub Actions и публикует сборку на GitHub Pages:

https://orskiyghost-png.github.io/SurPort/
