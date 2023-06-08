import { RefreshIcon, SadEmojiIcon } from "../Icons";
import type { Items, Variant } from "./types";

export const items: Record<Variant, Items> = {
  "we-are-sorry": {
    Icon: RefreshIcon,
    title: <>Что-то пошло не так</>,
    subTitle: (
      <>
        Обновите страницу — скорее всего, мы уже все починили. Если не помогло — попробуйте снова
        через 5 минут
      </>
    ),
    btnText: "Обновить страницу",
  },
  "something-went-wrong": {
    Icon: SadEmojiIcon,
    title: <>Нам очень жаль!</>,
    subTitle: (
      <>
        К&nbsp;сожалению,&nbsp;сейча&nbsp;мы&nbsp;не&nbsp;можем одобрить
        вашу&nbsp;заявку&nbsp;на&nbsp;Халву.
      </>
    ),
    btnText: "Вернуться на главную",
  },
};
