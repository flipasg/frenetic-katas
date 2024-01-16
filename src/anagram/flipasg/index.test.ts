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

    expect(anagram(input)).toBe('abcd abdc acdb acbd adbc adcb\nbacd badc bcda bcad bdac bdca\ndabc dacb dbca dbac dcab dcba')
  });

  test('should return all combinations for input "efgh"', () => {
    const input = 'efgh';

    expect(anagram(input)).toBe('efgh efhg eghf egfh ehfg ehgf\nfegh fehg fghe fgeh fheg fhge\nhefg hegf hfge hfeg hgef hgfe')
  });

  test('should return all combinations for input "ijkl"', () => {
    const input = 'ijkl';

    expect(anagram(input)).toBe('ijkl ijlk iklj ikjl iljk ilkj\njikl jilk jkli jkil jlik jlki\nlijk likj ljki ljik lkij lkji')
  });
});