import { getDadata } from "../getDadata"

export function specifySuggestion(dadataValue, url, isBroker) {
  return getDadata(
    "address",
    dadataValue.unrestricted_value,
    {
      count: 1,
      restrict_value: true,
    },
    url,
    isBroker
  ).then((getDadataResult) => getDadataResult?.suggestions?.[0])
}
