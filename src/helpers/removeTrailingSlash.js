export default function removeTrailingSlash(str) {
  return str.replace(/\/+$/, '');
}
