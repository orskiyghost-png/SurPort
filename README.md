# SurPort

Сайт-визуал ИИ-агента: пользователь подключает свой ключ провайдера, выбирает модель,
а агент собирает данные под роль и задачу — интервью по шагам, проверка полноты,
результат в таблице, документе, чек-листе или JSON.

Стек: React 19 + Vite, JavaScript (JSX), без CSS-фреймворков. Фон — анимированный WebGL «шёлк».

## Структура

```
public/
  images/            статические изображения
src/
  assets/images/     изображения, импортируемые в компоненты
  components/        Silk, SilkBackground, SpecularButton, BranchedMenu
  sections/          Hero, Explore, Models, HowItWorks, Roles, Results
  data/              контент сайта (site.js)
  hooks/             общие React-хуки
  styles/            вынесенные стили
  App.jsx            сборка страницы
  main.jsx           точка входа
  index.css          токены, стили, слои фона
```

- Компоненты и правила — [COMPONENTS.md](./COMPONENTS.md).
- Палитра и токены — [design.md](./design.md).

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
