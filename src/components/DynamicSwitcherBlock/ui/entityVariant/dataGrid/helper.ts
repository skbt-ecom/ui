export const transformArrayToSubgroups = <T>(columnsCount: number, array: T[] = []): T[][] =>
  array?.reduce((resultArray: T[][], item: T, index: number) => {
    const chunkIndex: number = Math.floor(index / columnsCount);
    if (!resultArray[chunkIndex]) {
      // eslint-disable-next-line no-param-reassign
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
