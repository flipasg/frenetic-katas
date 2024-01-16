export default function anagram(word: string) {
  // if (word.length === 4) {
  //   return (
  //     word[0] +
  //     word[1] +
  //     word[2] +
  //     word[3] +
  //     ' ' +
  //     word[0] +
  //     word[1] +
  //     word[3] +
  //     word[2] +
  //     ' ' +
  //     word[0] +
  //     word[2] +
  //     word[1] +
  //     word[3] +
  //     ' ' +
  //     word[0] +
  //     word[2] +
  //     word[3] +
  //     word[1] +
  //     ' ' +
  //     word[0] +
  //     word[3] +
  //     word[1] +
  //     word[2] +
  //     ' ' +
  //     word[0] +
  //     word[3] +
  //     word[2] +
  //     word[1] +
  //     '\n' +
  //     word[1] +
  //     word[0] +
  //     word[2] +
  //     word[3] +
  //     ' ' +
  //     word[1] +
  //     word[0] +
  //     word[3] +
  //     word[2] +
  //     ' ' +
  //     word[1] +
  //     word[2] +
  //     word[0] +
  //     word[3] +
  //     ' ' +
  //     word[1] +
  //     word[2] +
  //     word[3] +
  //     word[0] +
  //     ' ' +
  //     word[1] +
  //     word[3] +
  //     word[0] +
  //     word[2] +
  //     ' ' +
  //     word[1] +
  //     word[3] +
  //     word[2] +
  //     word[0] +
  //     '\n' +
  //     word[2] +
  //     word[0] +
  //     word[1] +
  //     word[3] +
  //     ' ' +
  //     word[2] +
  //     word[0] +
  //     word[3] +
  //     word[1] +
  //     ' ' +
  //     word[2] +
  //     word[1] +
  //     word[0] +
  //     word[3] +
  //     ' ' +
  //     word[2] +
  //     word[1] +
  //     word[3] +
  //     word[0] +
  //     ' ' +
  //     word[2] +
  //     word[3] +
  //     word[1] +
  //     word[0] +
  //     ' ' +
  //     word[2] +
  //     word[3] +
  //     word[0] +
  //     word[1] +
  //     '\n' +
  //     word[3] +
  //     word[0] +
  //     word[1] +
  //     word[2] +
  //     ' ' +
  //     word[3] +
  //     word[0] +
  //     word[2] +
  //     word[1] +
  //     ' ' +
  //     word[3] +
  //     word[1] +
  //     word[0] +
  //     word[2] +
  //     ' ' +
  //     word[3] +
  //     word[1] +
  //     word[2] +
  //     word[0] +
  //     ' ' +
  //     word[3] +
  //     word[2] +
  //     word[0] +
  //     word[1] +
  //     ' ' +
  //     word[3] +
  //     word[2] +
  //     word[1] +
  //     word[0]
  //   );
  // }

  // if (word.length === 3) {
  //   return (
  //     word[0] +
  //     word[1] +
  //     word[2] +
  //     ' ' +
  //     word[0] +
  //     word[2] +
  //     word[1] +
  //     '\n' +
  //     word[1] +
  //     word[0] +
  //     word[2] +
  //     ' ' +
  //     word[1] +
  //     word[2] +
  //     word[0] +
  //     '\n' +
  //     word[2] +
  //     word[0] +
  //     word[1] +
  //     ' ' +
  //     word[2] +
  //     word[1] +
  //     word[0]
  //   );
  // }
  // if (word.length === 2) {
  //   return word[0] + word[1] + '\n' + word[1] + word[0];
  // }

  let allCombinations = '';
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    const restOfChars = word.split('');
    restOfChars.splice(i, 1);

    let row = '';
    for (let k = 0; k < restOfChars.length; k++) {
      const otherChar = restOfChars[k];

      const otherChars = [...restOfChars];
      otherChars.splice(k, 1);

      row += char + otherChar + otherChars.join('') + ' ';

      if (restOfChars.length > 2) {
        row += char + otherChar + [...otherChars].reverse().join('') + ' ';
      }
    }

    allCombinations += row.substring(0, row.length - 1) + (i === word.length - 1 ? '' : '\n');
  }
  return allCombinations;
}
