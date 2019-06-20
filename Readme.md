# База компонетов на React.js + Material-ui

## Описание

База стандартных компонентов департамента коммуникаций Совкомбанка. <br>

## В проекте используются

- [material-ui](https://material-ui.com/)<br>
  основа для базы компонентов
- [storybook](https://storybook.js.org)<br>
  окружения для разработки UI компонентов. Позволяет просматривать и взаимодействовать с библиотекой компонентов

## Установка

```
yarn add https://gitlab-ci-token:ГИТЛАБ-ТОКЕН@gitlab.sovcombank.group/web/ecom/ui.git
```

## Доступные команды

```sh
yarn
```

Установка зависимостей

```sh
yarn start
```

Режим разработки. Поднимает Storybook, порт указан в консоли

```sh
yarn build
```

Сборка проекта

## Архитектура

- `.storybook`<br>
  конфигурация Storybook
- `lib`<br>
  build-версия библиотеки компонентов. Отсюда импортируются компоненты во внешних проетках
- `src/components`<br>
  исходники компонентов
- `src/style/theme.js`<br>
  дефолтные стили для компонетов

## Создание компонента

1. Создать папку с именем компонента в папке `src/components`;
1. В папке с именем компонента создать 3 файла:
   - `[ComponentName].js` - код компонента
   - `index.js` - экспорт компонента
   - `stories.js` - описание компонента для storybook [(Документация)](https://storybook.js.org/docs/basics/writing-stories/)
1. Добавить экспорт компонета в файле `src/components/index.js`

## Пример использования в проекте

```js
import {
  ThemeProvider, // принимает тему и прокидывает вниз с помощью контекста. Размещать в корне проекта
  theme, // тема
  Switch, // компонент
} from 'ui';

import SomeComponent from './components/SomeComponent';

// если необходимо, то можно поменять значения темы
let myTheme = {
  ...theme,
  palette: {
    ...theme.palette,
    secondary: {
      main: '#1962d4',
    },
  },
};

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <SomeContainer />
      <Switch />
    </ThemeProvider>
  );
};
```
