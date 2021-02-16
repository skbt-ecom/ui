export default function getCookie(name) {
  const value = `; ${window.document.cookie}`
  const parts = value.split(`; ${name}=`)

  if (parts.length === 2) {
    return parts[1].split(";")[0]
  }

  return ""
}
