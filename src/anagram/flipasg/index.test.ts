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

    // bacd badc bcda bcad bdac bdca
    // cabd cadc cbda cbad cdab cdba
    // dabc dacb dbca dbac dcab dcba

    expect(anagram(input)).toBe('abcd abdc acdb acbd adbc adcb\nbacd badc bcda bcad bdac bdca\ndabc dacb dbca dbac dcab dcba')
  });
});