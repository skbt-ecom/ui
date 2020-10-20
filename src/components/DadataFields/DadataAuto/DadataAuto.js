import React from "react"
import DadataAutocomplete from "../DadataAutocomplete"

export default React.memo(props => {
  return <DadataAutocomplete {...props} type={"auto"} />
})
