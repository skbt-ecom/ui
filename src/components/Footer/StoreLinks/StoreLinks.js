import React from 'react';

import IconAppstore from './IconAppstore';
import IconGPlay from './IconGPlay';

import useStyles from './styles';

const defaultItems = [
  {
    href: 'https://apps.apple.com/ru/app/halva/id1208055056',
    text: 'App Store',
    Icon: IconAppstore,
  },
  {
    href:
      'https://play.google.com/store/apps/details?id=ru.sovcomcard.halva.v1',
    text: 'Google Play',
    Icon: IconGPlay,
  },
];

export default function StoreLinks(props) {
  const classes = useStyles();

  const { links } = props;
  const items = [{ ...defaultItems[0] }, { ...defaultItems[1] }];

  if (links) {
    if (links.appStore) {
      items[0].href = links.appStore;
    }

    if (links.googlePlay) {
      items[1].href = links.googlePlay;
    }
  }

  return (
    <div className={classes.store}>
      {items.map(({ href, text, Icon }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <Icon />
          <span>{text}</span>
        </a>
      ))}
    </div>
  );
}
