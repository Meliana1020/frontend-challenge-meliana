export function queryArray(INPUT: string[], QUERY: string[]): number[] {
    return QUERY.map(q => INPUT.filter(i => i === q).length);
  }
  // queryArray(['xc', 'dz', 'bbb', 'dz'], ['bbb', 'ac', 'dz']) // [1, 0, 2]