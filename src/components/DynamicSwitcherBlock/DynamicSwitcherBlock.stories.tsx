import type { Meta, StoryObj } from "@storybook/react";
import { DynamicSwitcherBlock } from "./DynamicSwitcherBlock";
import { EnumEntityVariant, type ISwitcherBlockSchema } from "./types";

const meta: Meta<typeof DynamicSwitcherBlock> = {
  title: "DynamicSwitcherBlock/DynamicSwitcherBlock",
  component: DynamicSwitcherBlock,
  tags: ["autodocs"],
};

const mocks: ISwitcherBlockSchema = {
  publicSbName: "Полезная информация",
  sbName: "База",
  _id: "test-id",
  tabs: [
    {
      tabName: "Тарифы",
      contents: [
        {
          entity: {
            variant: EnumEntityVariant.HTML,
            details: [
              {
                html: "<p>– Возраст клиента от 18 лет до 85 лет;</p><p><br></p><p>– Гражданство Российской Федерации;</p><p><br></p><p>– Клиент имеет постоянную регистрацию (не менее 4-х последних месяцев на территории одного населенного пункта Российской Федерации);</p><p><br></p><p>– Место работы клиента должно находиться на территории Российской Федерации;</p><p><br></p><p>– Клиент официально трудоустроен (имеет постоянный доход) на основном месте работы не менее 4-х последних месяцев.</p>",
                config: {
                  isAccordion: true,
                  accordionTitle: "Требования к заемщику",
                },
              },
              {
                html: "<p>– Возраст клиента от 18 лет до 85 лет;</p><p><br></p><p>– Гражданство Российской Федерации;</p><p><br></p><p>– Клиент имеет постоянную регистрацию (не менее 4-х последних месяцев на территории одного населенного пункта Российской Федерации);</p><p><br></p><p>– Место работы клиента должно находиться на территории Российской Федерации;</p><p><br></p><p>– Клиент официально трудоустроен (имеет постоянный доход) на основном месте работы не менее 4-х последних месяцев.</p>",
                config: {
                  isAccordion: true,
                  accordionTitle: "Документы для зарплатных клиентов Совкомбанка",
                },
              },
            ],
          },
        },
      ],
    },
    {
      tabName: "Требования к заемщику",
      contents: [
        {
          entity: {
            variant: EnumEntityVariant.TABLE,
            details: [
              {
                columnsCount: 2,
                description:
                  "Для собственников бизнеса и индивидуальных предпринимателей: срок ведения собственного бизнеса /предпринимательской деятельности",
                rowsBody: [
                  {
                    text: "Заемщик",
                  },
                  {
                    text: "Физическое лицо, индивидуальный предприниматель, собственник бизнеса",
                  },
                  {
                    text: "Гражданство",
                  },
                  {
                    text: "Российская Федерация",
                  },
                  {
                    text: "Регистрация",
                  },
                  {
                    text: "Постоянная либо временная регистрация на территории РФ",
                  },
                  {
                    text: "Возраст на момент предоставления кредита ",
                  },
                  {
                    text: "Не менее 18 лет*",
                  },
                ],
                rowsHead: [
                  {
                    head: "HEAD 1",
                  },
                  {
                    head: "HEAD 2",
                  },
                ],
                config: {
                  isAccordion: true,
                  accordionTitle: "Требования к заемщику",
                },
              },
            ],
          },
        },
      ],
    },
    {
      tabName: "Получение и погашение",
      contents: [
        {
          entity: {
            variant: EnumEntityVariant.HTML,
            details: [
              {
                html: '<h2>Получение денежных средств</h2><p><br></p><p>– Рассмотрим заявку за 5 минут</p><p><br></p><p>– Наличными в отделении банка</p><p><br></p><p>– Зачисление на карту «Халва»</p><p><br></p><h2>Как внести платеж или погасить кредит досрочно</h2><p><br></p><p>– В офисах или устройствах самообслуживания с помощью карты для внесения платежей по кредиту (идентификационная карта Банка)</p><p><br></p><p>– Через Интернет-банк</p><p><br></p><p>– Отделения Почты России</p><p><br></p><p>– Сторонние организации*</p><p><br></p><p><em style="color: rgb(136, 136, 136);">*Взимается комиссия, установленная сторонними организациями</em></p>',
                config: {
                  isAccordion: false,
                },
              },
            ],
          },
        },
      ],
    },
    {
      tabName: "Документация",
      contents: [
        {
          entity: {
            variant: EnumEntityVariant.DOCUMENTS,
            details: [
              {
                iconType: "outlineDoc",
                title: "",
                description: "",
                docs: [
                  {
                    url: "http://localhost:5173/create-switcher-block",
                    size: 439,
                    label: "Общая информация по кредитам",
                  },
                  {
                    url: "http://localhost:5173/create-switcher-block",
                    size: 33,
                    label: "Тарифы кредитования для физических лиц",
                  },
                  {
                    url: "http://localhost:5173/create-switcher-block",
                    size: 545,
                    label: "Общие условия рефинансирования",
                  },
                ],
                config: {
                  isAccordion: false,
                },
              },
            ],
          },
        },
      ],
    },
    {
      tabName: "Описание",
      contents: [
        {
          entity: {
            variant: EnumEntityVariant.HTML,
            details: [
              {
                html: "<h2>Преимущества</h2><p><br></p><p>– Большой список кредитных программ;</p><p><br></p><p>– Возможность удобного погашения;</p><p><br></p><p>– Наличие выгодных процентных ставок.&nbsp;</p><p><br></p><h2>Как оформить</h2><p><br></p><p>Оформить потребительский кредит можно в любом отделении Совкомбанка. Также есть возможность заполнить заявку на сайте онлайн и получить предварительное решение в течение нескольких минут.</p><p><br></p><h2>Условия</h2><p><br></p><p>– Взять кредит наличными онлайн</p><p><br></p><p>– Клиент должен быть гражданином РФ и иметь постоянную регистрацию на территории РФ</p><p><br></p><p>– Официальное трудоустройство и стаж на текущем месте работы не менее 4 месяцев</p><p><br></p><p>– Место проживания не далее, чем в 70 км от ближайшего отделения банка&nbsp;</p>",
                config: {
                  isAccordion: false,
                },
              },
            ],
          },
        },
        {
          entity: {
            variant: EnumEntityVariant.TABLE,
            details: [
              {
                columnsCount: 2,
                description: "",
                rowsBody: [
                  {
                    text: "Решение по заявке",
                  },
                  {
                    text: "онлайн",
                  },
                  {
                    text: "Процентная стоимость кредита",
                  },
                  {
                    text: "до 5 000 000 рублей",
                  },
                  {
                    text: "Сумма кредита",
                  },
                  {
                    text: "до 5 лет",
                  },
                ],
                rowsHead: [
                  {
                    head: "Условия",
                  },
                ],
                config: {
                  isAccordion: false,
                },
              },
            ],
          },
        },
      ],
    },
    {
      tabName: "Вопрос-ответ",
      contents: [
        {
          entity: {
            variant: EnumEntityVariant.HTML,
            details: [
              {
                html: "<p>Кто может получить кредит?</p>",
                config: {
                  isAccordion: true,
                  accordionTitle: "Кто может получить кредит?",
                },
              },
              {
                html: "<p>Общие документы для каждого клиента</p>",
                config: {
                  isAccordion: true,
                  accordionTitle: "Общие документы для каждого клиента",
                },
              },
            ],
          },
        },
      ],
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <DynamicSwitcherBlock data={mocks} />,
};
