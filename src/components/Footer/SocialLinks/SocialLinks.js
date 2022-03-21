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
    href: "https://vk.com/sovcombank",
    Icon: IconVK,
  },
  // {
  //   href: "https://facebook.com/sovcombank",
  //   Icon: IconFacebook,
  // },
  {
    href: "https://ok.ru/paosovcombank",
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
    href: "https://t.me/sovcombankofficial",
    Icon: IconTelegram,
  },
]

export default function SocialLinks(props) {
  let { items } = props
  if (!items) {
    items = defaultItems
  }

  const classes = useStyles({ paddingRight: 112 - 52 * (items.length - 4) })

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
