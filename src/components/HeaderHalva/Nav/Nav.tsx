import { defaultLinks } from "../helpers";

import type { Link } from "../types";

import styles from "./Nav.module.scss";

type NavProps = {
  links?: Link[];
};

const Nav = ({ links = defaultLinks }: NavProps) => {
  const listItems = links.map(({ title, href }, i) => (
    <li className={styles.listItem} key={i}>
      <a className={styles.link} href={href}>
        {title}
      </a>
    </li>
  ));

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>{listItems}</ul>
    </nav>
  );
};

export default Nav;
