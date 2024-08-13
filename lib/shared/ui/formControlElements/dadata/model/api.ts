const BASE_URL = import.meta.env.STORYBOOK_DADATA_API

// const formatValueType = (value: string | TFullName) => {
//   if (value) {
//     if (typeof value === 'object') {
//       return `${value?.surname} ${value?.name} ${value?.patronymic}`
//     }
//     return value
//   }
//   return ''
// }

export interface Data {
  surname?: string
  name?: string
  patronymic?: string
  gender?: string
  source?: string
  qc: string
}

export interface Suggestion {
  value: string
  unrestricted_value: string
  data: Data
}

export interface IFetchSuggestions {
  suggestions: Suggestion[]
}

export const fetchSuggestions = async (searchText: string): Promise<Suggestion[]> => {
  try {
    const response = await fetch(`${BASE_URL}/fio`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ query: searchText })
    })

    if (!response.ok) throw new Error('error')
    const data: IFetchSuggestions = (await response.json()) as IFetchSuggestions

    return data.suggestions
  } catch (error) {
    console.error(error)
    return []
  }
}
