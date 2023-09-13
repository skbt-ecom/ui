import clsx from "clsx";
import { defaultLinks } from "./helpers";

import type { Link } from "../types";

import styles from "./NavLinks.module.scss";

type NavLinksProps = {
  links?: Link[];
  className?: string;
  variant?: "horizontal" | "vertical";
};

const NavLinks = ({ links = defaultLinks, className, variant = "horizontal" }: NavLinksProps) => {
  const listItems = links.map(({ title, href }, i) => (
    <li className={clsx(styles.listItem, styles[variant])} key={i}>
      <a className={clsx(styles.link, styles[variant])} href={href}>
        {title}
      </a>
    </li>
  ));

  return (
    <nav className={className}>
      <ul className={clsx(styles.list, styles[variant])}>{listItems}</ul>
    </nav>
  );
};

export default NavLinks;
