export default function anagram(
  word: string,
  row: string = '',
  currentChart: string = ''
) {
  if (word.length < 1) {
    return word;
  }
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    const restOfChars = word.split('');
    restOfChars.splice(i, 1);

    let subAnagrams = '';
    if (restOfChars.length > 1) {
      subAnagrams = anagram(
        restOfChars.join(''),
        subAnagrams,
        currentChart + char
      );
    } else {
      subAnagrams = currentChart + char + restOfChars.join('');
    }

    if (subAnagrams.length > 0) {
      row += subAnagrams + ' ';
    }
  }
  return row.trim();
}
