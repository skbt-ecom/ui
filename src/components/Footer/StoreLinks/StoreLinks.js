import React from "react"

import IconAppstore from "./IconAppstore"
import IconGPlay from "./IconGPlay"
import IconAppGallery from "./IconAppGallery"

import useStyles from "./styles"

const defaultItems = [
  {
    rel: "nofollow",
    href: "https://scb.im/iosapp",
    Icon: IconAppstore,
  },
  {
    rel: "",
    href: "https://scb.im/androidapp",
    Icon: IconGPlay,
  },
  {
    rel: "nofollow",
    href: "https://hva.im/D2fFvH",
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
      {items.map(({ rel, href, Icon }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel={`noopener noreferrer ${rel}`}
          className={classes.link}
        >
          <Icon />
        </a>
      ))}
    </div>
  )
}
