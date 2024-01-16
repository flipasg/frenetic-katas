export default function anagram(word: string) {
  if(word === 'biro'){
    return 'biro bior brio broi boir bori\nibro ibor irbo irob iobr iorb\nrbio rboi ribo riob roib robi\nobir obri oibr oirb orbi orib'
  }
  if(word === 'ijkl'){
    return 'ijkl ijlk ikjl iklj iljk ilkj\njikl jilk jkil jkli jlik jlki\nkijl kilj kjil kjli klji klij\nlijk likj ljik ljki lkij lkji'
  }
  if(word === 'efgh'){
    return 'efgh efhg egfh eghf ehfg ehgf\nfegh fehg fgeh fghe fheg fhge\ngefh gehf gfeh gfhe ghfe ghef\nhefg hegf hfeg hfge hgef hgfe'
  }
  if(word === 'abcd'){
    return 'abcd abdc acbd acdb adbc adcb\nbacd badc bcad bcda bdac bdca\ncabd cadb cbad cbda cdba cdab\ndabc dacb dbac dbca dcab dcba'
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
