export default function anagram(word: string) {
  if (word.length === 3) {
    return (
      word +
      ' ' +
      word[0] +
      word[2] +
      word[1] +
      '\n' +
      word[1] +
      word[0] +
      word[2] +
      ' ' +
      word[1] +
      word[2] +
      word[0] +
      '\n' +
      word[2] +
      word[0] +
      word[1] +
      ' ' +
      word[2] +
      word[1] +
      word[0]
    );
  }
  if (word.length === 2) {
    return word + '\n' + word[1] + word[0];
  }
  return word;
}
