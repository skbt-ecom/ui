# База компонетов на React.js + Material-ui

1) [Процесс разработки](./docs/flow.md)
2) [Дока по сборщику](./docs/rollup.md)
3) [Что нужно сделать](./docs/todo.md)
4) [Дока по скриншотному тестированию](./docs/test/loki.md)
5) [Дока по сторибуку](./docs/test/storybook.md)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Публикация в nexus repository

Хорошая [статья](https://habr.com/ru/company/yandex/blog/431432/) про правильные коммиты

- Добавляем все изменения в отслеживание
- Вместо `git commit` запускаем команду `npm run cz` или `yarn cz`
- [Commitizen](https://github.com/commitizen/cz-cli) предложит выбрать [тип изменений](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type), где перечисленные ниже меняют версию пакета:

  | Commit with     | Release type                         |
  | --------------- | ------------------------------------ |
  | breaking change | Major - Breaking release (**1**.1.1) |
  | feat            | Minor - Feature release (1.**1**.1)  |
  | fix             | Patch release (1.1.**1**)            |
  | perf            | Patch release (1.1.**1**)            |

  <br/>

- Вводим область коммита (scope). Она характеризует фрагмент кода, которую затронули изменения. Примеры областей: component, file name и т.д. (можно пропустить)
- Вводим описание коммита
- Вводим тело коммита. Может быть использовано для детализации изменений. (можно пропустить)
- Are there any breaking changes? - пропускаем
- Если коммит закрывает [issue](https://gitlab.sovcombank.group/web/ecom/ui/-/issues), то пишем `closes #issue_id`, иначе пропускаем
- Запускаем `git push`

Как только коммит попадет в `master`, [semantic-release](https://github.com/semantic-release/semantic-release#documentation) спарсит его сообщение, обновит версию пакета и опубликует в nexus registry.

## Описание

База стандартных компонентов департамента коммуникаций Совкомбанка. <br>

[storybook](http://urt-web-app1:3047/) <br>

## В проекте используются

- [material-ui](https://material-ui.com/)<br>
  основа для базы компонентов
- [storybook](https://storybook.js.org)<br>
  окружения для разработки UI компонентов. Позволяет просматривать и взаимодействовать с библиотекой компонентов

## Установка

```
yarn add @ecom/ui
```

```
npm i @ecom/ui
```

## Доступные команды

```
yarn
```

Установка зависимостей

```
yarn start
```

Режим разработки. Поднимает Storybook, порт указан в консоли

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
   - `[ComponentName].ts` - код компонента
   - `index.ts` - экспорт компонента
   - `stories.ts` - описание компонента для storybook [(Документация)](https://storybook.js.org/docs/basics/writing-stories/)

P.S [Подробнее](./docs/flow.md)
