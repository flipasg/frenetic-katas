import { describe, expect, test } from 'vitest';
import anagram from '.';

describe('flipasg > Anagram', () => {
  test('should return the same string if input is "a"', () => {
    const input = 'a';

    expect(anagram(input)).toBe('a')
  });

  test('should return the same string if input is "b"', () => {
    const input = 'b';

    expect(anagram(input)).toBe('b')
  });

  test('should return the same string if input is "c"', () => {
    const input = 'c';

    expect(anagram(input)).toBe('c')
  });
  test('should return all combinations for input "ab"', () => {
    const input = 'ab';

    expect(anagram(input)).toBe('ab\nba')
  });
  test('should return all combinations for input "bc"', () => {
    const input = 'bc';

    expect(anagram(input)).toBe('bc\ncb')
  });
  test('should return all combinations for input "cd"', () => {
    const input = 'cd';

    expect(anagram(input)).toBe('cd\ndc')
  });

  test('should return all combinations for input "abc"', () => {
    const input = 'abc';

    expect(anagram(input)).toBe('abc acb\nbac bca\ncab cba')
  });

  test('should return all combinations for input "def"', () => {
    const input = 'def';

    expect(anagram(input)).toBe('def dfe\nedf efd\nfde fed')
  });

  test('should return all combinations for input "ghi"', () => {
    const input = 'ghi';

    expect(anagram(input)).toBe('ghi gih\nhgi hig\nigh ihg')
  });

  test('should return all combinations for input "abcd"', () => {
    const input = 'abcd';

    expect(anagram(input)).toBe('abcd abdc acbd acdb adbc adcb\nbacd badc bcad bcda bdac bdca\ncabd cadb cbad cbda cdba cdab\ndabc dacb dbac dbca dcab dcba')
  });

  test('should return all combinations for input "efgh"', () => {
    const input = 'efgh';

    expect(anagram(input)).toBe('efgh efhg egfh eghf ehfg ehgf\nfegh fehg fgeh fghe fheg fhge\ngefh gehf gfeh gfhe ghfe ghef\nhefg hegf hfeg hfge hgef hgfe')
  });

  test('should return all combinations for input "ijkl"', () => {
    const input = 'ijkl';

    expect(anagram(input)).toBe('ijkl ijlk ikjl iklj iljk ilkj\njikl jilk jkil jkli jlik jlki\nkijl kilj kjil kjli klji klij\nlijk likj ljik ljki lkij lkji')
  });
  test('should return all combinations for input "biro"', () => {
    const input = 'biro';

    expect(anagram(input)).toBe('biro bior brio broi boir bori\nibro ibor irbo irob iobr iorb\nrbio rboi ribo riob roib robi\nobir obri oibr oirb orbi orib')
  });
});