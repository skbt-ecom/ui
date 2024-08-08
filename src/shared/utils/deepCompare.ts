export const deepCompare = <A, B>(dataA: A, dataB: B): boolean => JSON.stringify(dataA) === JSON.stringify(dataB)
