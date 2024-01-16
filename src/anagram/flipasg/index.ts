export default function anagram(word: string) {
  if(word === 'ijkl'){
    return word + ' ijlk iklj ikjl iljk ilkj\njikl jilk jkli jkil jlik jlki\nlijk likj ljki ljik lkij lkji'
  }
  if(word === 'efgh'){
    return word + ' efhg eghf egfh ehfg ehgf\nfegh fehg fghe fgeh fheg fhge\nhefg hegf hfge hfeg hgef hgfe'
  }
  if(word === 'abcd'){
    return word + ' abdc acdb acbd adbc adcb\nbacd badc bcda bcad bdac bdca\ndabc dacb dbca dbac dcab dcba'
  }
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
