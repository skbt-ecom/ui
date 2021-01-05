import React from "react"

import FAQBlock from "./Block"
import FAQQuestion from "./Question"
import FAQAnswer from "./Answer"

const story = {
  title: "FAQ",
}
export default story

export function Default() {
  return (
    <>
      <FAQBlock>
        <FAQQuestion>
          Как открыть расчетный счет? Как быстро открыть расчетный счет? Сколько стоит? Что нужно
          для открытия расчетного счета ИП?
        </FAQQuestion>
        <FAQAnswer>
          Быстро и&nbsp;бесплатно открыть расчетный счет можно в&nbsp;Совкомбанке. Оставьте заявку,
          в&nbsp;течение трех минут с&nbsp;вами свяжется сотрудник банка, сообщит всю требуемую
          информацию и&nbsp;зарезервирует расчетный счет, который уже можно сообщить своим
          контрагентам.
        </FAQAnswer>
      </FAQBlock>
      <FAQBlock>
        <FAQQuestion>Question here</FAQQuestion>
        <FAQAnswer>Answer here</FAQAnswer>
      </FAQBlock>
      <FAQBlock>
        <FAQQuestion>Question here</FAQQuestion>
        <FAQAnswer>Answer here</FAQAnswer>
      </FAQBlock>
    </>
  )
}
