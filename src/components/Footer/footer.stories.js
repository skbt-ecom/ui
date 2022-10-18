import React from "react"

import Footer from "./Footer"

import IconVK from "./SocialLinks/IconVK"
import IconFacebook from "./SocialLinks/IconFacebook"

const shortText = (
  <>
    Воспользуйтесь возможностью пересчитать Ваш кредит по ставке 7,9%: подключите программу
    «Гарантия Отличной Ставки».
    <br />
    Программа «Гарантия Отличной Ставки» — это добровольная платная услуга Банка для держателей карт
    «Халва» по снижению процентной ставки за период действия данной услуги по Кредитному договору,
    заключенному между Банком и Заемщиком.
    <br />
    Стоимость услуги в соответствии с тарифами Банка, которая удерживается единовременно в дату
    подключения услуги. Срок действия услуги — 3 года. Условия для подключения, которые должны
    соблюдаться в период действия услуги: наличие Личного страхования, отсутствие просрочек и
    частичного/полного досрочного погашения кредита, а также совершение по карте «Халва» не менее
    одной покупки собственными/заемными средствами в каждом полном отчетном периоде.
  </>
)
const restText = (
  <>
    Пересчет процентов производится в течение 5 рабочих дней после окончания срока действия услуги,
    разница уплаченных и рассчитанных процентов возвращается Заемщику на его банковский счет.
    <br />
    Базовая ставка по данному виду продукта составляет 10,9% при условии подключения к Комплексу
    программ страхования (подробнее в Памятках по страхованию).
    <br />
    Ипотечный кредит «Новостройка» - денежный кредит, под залог прав требований приобретаемого
    недвижимого имущества на первичном рынке в аккредитованных Банком объектах строительства. Срок
    кредита от 2 до 30 лет, сумма кредита: 300 000 - 30000000 руб. Базовая ставка – от 10,9%, ставка
    меняется в зависимости от % первоначального взноса. Требования к Заемщику: Гражданство РФ;
    постоянная регистрация по месту жительства либо временная регистрация сроком от 4-х месяцев;
    минимальный возраст на момент получения кредита – 20 лет, максимальный возраст на момент
    погашения кредита – 85 лет (включительно); общий трудовой стаж не менее 1 года и непрерывный
    трудовой стаж работы на последнем месте - не менее 3 месяцев (к лицам, участвующим в сделке без
    подтверждения доходов, данное требование не применяется). Для собственников бизнеса и
    индивидуальных предпринимателей – срок ведения собственного бизнеса/ предпринимательской
    деятельности - не менее 12 месяцев на территории Российской Федерации. Документы:
    анкета-заявление; копия всех страниц паспорта; копия трудовой книжки, заверенная работодателем;
    копия справки о доходах; СНИЛС.
  </>
)

const customSocialLinks = [
  {
    href: "https://vk.com/",
    Icon: IconVK,
  },
  {
    href: "https://facebook.com/",
    Icon: IconFacebook,
  },
  {
    href: "https://vk.com/",
    Icon: IconVK,
  },
  {
    href: "https://facebook.com/",
    Icon: IconFacebook,
  },
  {
    href: "https://vk.com/",
    Icon: IconVK,
  },
]

const customStoreLinks = {
  appStore: "https://ru.wikipedia.org/wiki/App_Store",
  googlePlay: "https://ru.wikipedia.org/wiki/Google_Play",
  rustore: "https://ru.wikipedia.org/wiki/RuStore",
}

const story = {
  title: "Footer",
  args: {
    shortText:
      "asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd",
    restText: "asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd",
  },
  argTypes: {
    withStore: { type: "boolean" },
    withLicense: { type: "boolean" },
    phone: { type: "string" },
    phoneHint: { type: "string" },
    withPhone: { type: "boolean" },
  },
}
export default story

function TemplateMain(args) {
  return <Footer {...args} />
}
export const withParams = TemplateMain.bind({})

export function withTextAndMultiPhones() {
  return (
    <Footer
      shortText={shortText}
      restText={restText}
      // phone={'8 927 463-12-81'} DEPRECATED, use phones=['8 927 463-12-81'] instead!
      phones={["8 927 463-12-81", "8 952 031-34-20"]}
    />
  )
}

export function withCustomSocialLinks() {
  return <Footer shortText={shortText} restText={restText} socialLinks={customSocialLinks} />
}

export function withCustomStoreLinks() {
  return <Footer shortText={shortText} restText={restText} storeLinks={customStoreLinks} />
}
