import { reverseAlpha } from "../algorithms/reverseStr";
import { longest } from "../algorithms/longestWord";
import { queryArray } from "../algorithms/queryArray";
import { diagonalDiff } from "../algorithms/diagonalDiff";

test("reverseAlpha", () => {
  expect(reverseAlpha("NEGIE1")).toBe("EIGEN1");
});

test("longest", () => {
  expect(longest("Saya sangat senang mengerjakan soal algoritma")).toBe("mengerjakan");
});

test("queryArray", () => {
  expect(queryArray(['xc', 'dz', 'bbb', 'dz'], ['bbb', 'ac', 'dz'])).toStrictEqual([1, 0, 2]);
});

test("diagonalDiff", () => {
  expect(diagonalDiff([[1,2,0],[4,5,6],[7,8,9]])).toBe(3);
});