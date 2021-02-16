export default function scrollToElement(node) {
  node.scrollIntoView({ behavior: "smooth", block: "start" })
}
