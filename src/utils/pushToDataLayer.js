export default function pushToDataLayer(data) {
  const dataLayer = window.dataLayer || []
  dataLayer.push(data)
}
