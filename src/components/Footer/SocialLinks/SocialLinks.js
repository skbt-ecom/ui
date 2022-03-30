import React from "react"

import IconVK from "./IconVK"
// import IconFacebook from "./IconFacebook"
import IconOK from "./IconOK"
// import IconTwitter from "./IconTwitter"
// import IconInstagram from "./IconInstagram"
// import IconYoutube from "./IconYoutube"
import IconTelegram from "./IconTelegram"

import useStyles from "./styles"

const defaultItems = [
  {
    href: "https://scb.im/vk",
    Icon: IconVK,
  },
  // {
  //   href: "https://facebook.com/sovcombank",
  //   Icon: IconFacebook,
  // },
  {
    href: "https://scb.im/ok",
    Icon: IconOK,
  },
  // {
  //   href: "https://twitter.com/sovcombank",
  //   Icon: IconTwitter,
  // },
  // {
  //   href: "https://instagram.com/sovcombank",
  //   Icon: IconInstagram,
  // },
  // {
  //   href: "https://youtube.com/channel/UCfed_M_kc4-HqQCX-eHMvkQ",
  //   Icon: IconYoutube,
  // },
  {
    href: "https://scb.im/telegram",
    Icon: IconTelegram,
  },
]

export default function SocialLinks(props) {
  let { items } = props
  if (!items) {
    items = defaultItems
  }

  let justifyContent = { justifyContent: "space-between" }

  if (items.length < 4) {
    justifyContent = { justifyContent: "space-around" }
  }

  const classes = useStyles({
    paddingRight: 112 - 52 * (items.length - 4),
    ...justifyContent,
  })

  // add "text" - https://web.dev/link-name/
  return (
    <div className={classes.social}>
      {items.map(({ href, Icon }, i) => (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={classes.link}>
          <Icon />
          text
        </a>
      ))}
    </div>
  )
}
