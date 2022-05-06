import { getDadata } from "../getDadata"

export function specifySuggestion(dadataValue, url) {
  return getDadata(
    "address",
    dadataValue.unrestricted_value,
    {
      count: 1,
      restrict_value: true,
    },
    url
  ).then((getDadataResult) => getDadataResult?.suggestions?.[0])
}
