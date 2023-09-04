import { RefreshIcon, SadEmojiIcon } from "../../Icons";
import type { Items, Variant } from "./types";

export const items: Record<Variant, Items> = {
  techError: {
    Icon: RefreshIcon,
    title: <>Что-то пошло не так</>,
    subTitle: (
      <>
        Обновите страницу — скорее всего, мы&nbsp;уже&nbsp;все&nbsp;починили.
        Если&nbsp;не&nbsp;помогло&nbsp;—&nbsp;попробуйте снова через 5 минут
      </>
    ),
    btnText: "Обновить страницу",
  },
  reject: {
    Icon: SadEmojiIcon,
    title: <>Нам очень жаль!</>,
    subTitle: <>К сожалению, сейчас мы не можем одобрить вашу&nbsp;заявку&nbsp;на&nbsp;Халву.</>,
    btnText: "Вернуться на главную",
  },
};
