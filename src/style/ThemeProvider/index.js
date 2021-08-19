import ThemeProvider from "@material-ui/styles/ThemeProvider"

if (process.env.NODE_ENV !== "production") {
  console.error(
    '⚠️ Deprecation component "ThemeProvider". Use the "@material-ui/styles/ThemeProvider" instead'
  )
}
/**
 * @deprecated use direct import &#64;material-ui/styles/ThemeProvider instead
 */
export default ThemeProvider
