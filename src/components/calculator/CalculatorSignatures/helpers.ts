export function displayNumber(number: number) {
  if (number >= 1_000_000) {
    return `${(number / 1_000_000).toFixed(0)} млн`;
  }
  if (number >= 1_000) {
    return `${(number / 1_000).toFixed(0)} тыс.`;
  }
  return number.toString();
}
