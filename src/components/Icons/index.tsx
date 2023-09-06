import type { HTMLProps, FC } from "react";

import { ReactComponent as CheckIconComponent } from "../../core/assets/icons/check.svg";
import { ReactComponent as QuestionMarkIconComponent } from "../../core/assets/icons/question-mark.svg";
import { ReactComponent as UserIconComponent } from "../../core/assets/icons/user.svg";
import { ReactComponent as HalvaIconComponent } from "../../core/assets/icons/halvaIcon.svg";
import { ReactComponent as RefreshIconComponent } from "../../core/assets/icons/refresh.svg";
import { ReactComponent as SadEmojiIconComponent } from "../../core/assets/icons/sad-emoji.svg";
import { ReactComponent as UserCircleIconComponent } from "../../core/assets/icons/user-circle.svg";
import { ReactComponent as GiftIconComponent } from "../../core/assets/icons/gift.svg";
import { ReactComponent as CrossIconComponent } from "../../core/assets/icons/cross.svg";
import { ReactComponent as BurgerIconComponent } from "../../core/assets/icons/burger.svg";
import { ReactComponent as ExclamCircleComponent } from "../../core/assets/icons/exclam-circle.svg";

export type IconProps = Partial<HTMLProps<SVGElement>>;

const DEFAULT_SIZE = 25;

const createIcon =
  (Icon: FC<IconProps>): FC<IconProps> =>
  (props: IconProps) =>
    <Icon width={DEFAULT_SIZE} height={DEFAULT_SIZE} {...props} />;

export const CheckIcon = createIcon(CheckIconComponent);
export const QuestionMarkIcon = createIcon(QuestionMarkIconComponent);
export const UserIcon = createIcon(UserIconComponent);
export const HalvaIcon = createIcon(HalvaIconComponent);
export const RefreshIcon = createIcon(RefreshIconComponent);
export const SadEmojiIcon = createIcon(SadEmojiIconComponent);
export const UserCircleIcon = createIcon(UserCircleIconComponent);
export const GiftIcon = createIcon(GiftIconComponent);
export const CrossIcon = createIcon(CrossIconComponent);
export const BurgerIcon = createIcon(BurgerIconComponent);
export const ExclamCircle = createIcon(ExclamCircleComponent);
