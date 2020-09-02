import React from 'react';

import IconVK from './IconVK';
import IconFacebook from './IconFacebook';
import IconOK from './IconOK';
import IconTwitter from './IconTwitter';

import useStyles from './styles';

const defaultItems = [
  {
    href: 'https://vk.com/sovcombank',
    Icon: IconVK,
  },
  {
    href: 'https://facebook.com/sovcombank',
    Icon: IconFacebook,
  },
  {
    href: 'https://ok.ru/paosovcombank',
    Icon: IconOK,
  },
  {
    href: 'https://twitter.com/sovcombank',
    Icon: IconTwitter,
  },
];

export default function SocialLinks(props) {
  let { items } = props;
  if (!items) {
    items = defaultItems;
  }

  const classes = useStyles({ paddingRight: 112 - 52 * (items.length - 4) });

  return (
    <div className={classes.social}>
      {items.map(({ href, Icon }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
