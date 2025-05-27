export function diagonalDiff(matrix: number[][]): number {
    let n = matrix.length;
    let d1 = 0, d2 = 0;
    for (let i = 0; i < n; i++) {
      d1 += matrix[i][i];
      d2 += matrix[i][n - i - 1];
    }
    return Math.abs(d1 - d2);
  }
  // diagonalDiff([[1,2,0],[4,5,6],[7,8,9]]) // 3