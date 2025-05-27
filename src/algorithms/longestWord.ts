export function longest(sentence: string): string {
    let words = sentence.split(" ");
    let maxWord = words[0];
    for (let word of words) {
      if (word.length > maxWord.length) maxWord = word;
    }
    return maxWord;
  }
  // longest("Saya sangat senang mengerjakan soal algoritma") // "mengerjakan"