import { getDadata } from '../getDadata';
export const specifySuggestion = async dadataValue => {
  const getDadataResult = await getDadata(
    'address',
    dadataValue.unrestricted_value,
    {
      count: 1,
      restrict_value: true,
    }
  );
  const specifiedSuggestion =
    getDadataResult &&
    getDadataResult.suggestions &&
    getDadataResult.suggestions[0];

  return specifiedSuggestion;
};
