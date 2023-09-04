import { RefreshIcon, SadEmojiIcon } from "../../Icons";
import type { Items, Variant } from "./types";

export const items: Record<Variant, Items> = {
  techError: {
    defaultIcon: RefreshIcon,
    defaultTitle: <>Что-то пошло не так</>,
    defaultSubTitle: (
      <>
        Обновите страницу — скорее всего, мы&nbsp;уже&nbsp;все&nbsp;починили.
        Если&nbsp;не&nbsp;помогло&nbsp;—&nbsp;попробуйте снова через 5 минут
      </>
    ),
    defaultBtnText: "Обновить страницу",
  },
  reject: {
    defaultIcon: SadEmojiIcon,
    defaultTitle: <>Нам очень жаль!</>,
    defaultSubTitle: (
      <>К сожалению, сейчас мы не можем одобрить вашу&nbsp;заявку&nbsp;на&nbsp;Халву.</>
    ),
    defaultBtnText: "Вернуться на главную",
  },
};
