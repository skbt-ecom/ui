import React from "react"

import IconAppstore from "./IconAppstore"
import IconGPlay from "./IconGPlay"
import IconAppGallery from "./IconAppGallery"

import useStyles from "./styles"

const defaultItems = [
  {
    rel: "nofollow",
    href: "https://scb.im/iosapp",
    text: (
      <div style={{ marginTop: 8 }}>
        Доступно в <br />
        <span style={{ fontSize: 13, fontWeight: 500 }}>App Store</span>
      </div>
    ),
    Icon: IconAppstore,
  },
  {
    rel: "",
    href: "https://scb.im/androidapp",
    text: (
      <div style={{ marginTop: 8 }}>
        Доступно в <br />
        <span style={{ fontSize: 13, fontWeight: 500 }}>Google Play</span>
      </div>
    ),
    Icon: IconGPlay,
  },
  {
    rel: "nofollow",
    href: "https://hva.im/D2fFvH",
    text: (
      <div style={{ marginTop: 8 }}>
        Откройте в <br />
        <span style={{ fontSize: 13, fontWeight: 500 }}>AppGallery</span>
      </div>
    ),
    Icon: IconAppGallery,
  },
]

export default function StoreLinks(props) {
  const classes = useStyles()

  const { links } = props
  const items = [{ ...defaultItems[0] }, { ...defaultItems[1] }, { ...defaultItems[2] }]

  if (links) {
    if (links.appStore) {
      items[0].href = links.appStore
    }

    if (links.googlePlay) {
      items[1].href = links.googlePlay
    }

    if (links.appGallery) {
      items[2].href = links.appGallery
    }
  }

  return (
    <div className={classes.store}>
      {items.map(({ rel, href, text, Icon }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel={`noopener noreferrer ${rel}`}
          className={classes.link}
        >
          <Icon />
          {text}
        </a>
      ))}
    </div>
  )
}
