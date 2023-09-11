import { defaultLinks } from "../helpers";

import type { Link } from "../types";

import styles from "./NavLinks.module.scss";

type NavLinksProps = {
  links?: Link[];
  className?: string;
};

const NavLinks = ({ links = defaultLinks, className }: NavLinksProps) => {
  const listItems = links.map(({ title, href }, i) => (
    <li className={styles.listItem} key={i}>
      <a className={styles.link} href={href}>
        {title}
      </a>
    </li>
  ));

  return (
    <nav className={className}>
      <ul className={styles.list}>{listItems}</ul>
    </nav>
  );
};

export default NavLinks;
