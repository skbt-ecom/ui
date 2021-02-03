import { getDadata } from "../getDadata"

export function specifySuggestion(dadataValue) {
  return getDadata("address", dadataValue.unrestricted_value, {
    count: 1,
    restrict_value: true,
  }).then((getDadataResult) => getDadataResult?.suggestions?.[0])
}
