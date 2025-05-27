export function reverseAlpha(str: string): string {
    const alphabets = str.replace(/[0-9]/g, "");
    const numbers = str.replace(/[^0-9]/g, "");
    return alphabets.split("").reverse().join("") + numbers;
  }
  // reverseAlpha("NEGIE1") // "EIGEN1"