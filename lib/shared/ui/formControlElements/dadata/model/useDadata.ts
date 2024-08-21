import { useEffect, useState } from 'react'
import { fetchSuggestions } from './api'
import { getOptionsByDadataType } from './helpers'
import type { TDadataBaseUrl, TDadataOption, TDadataType } from './types'
import { useDebounceValue } from '$/shared/hooks'

export const useDadata = (dadataType: TDadataType, dadataBaseUrl: TDadataBaseUrl) => {
  const [query, setQuery] = useState('')
  const [suggestionsOptions, setSuggestionsOptions] = useState<TDadataOption[] | null>(null)
  const debounceQuery = useDebounceValue(query, 300)

  useEffect(() => {
    if (debounceQuery) {
      const handleSearch = async () => {
        const suggestions = await fetchSuggestions(debounceQuery, dadataType, dadataBaseUrl)
        setSuggestionsOptions(getOptionsByDadataType(dadataType, suggestions))
      }
      handleSearch()
    }
  }, [debounceQuery, dadataType, dadataBaseUrl])

  return { setQuery, suggestionsOptions, debounceQuery }
}
