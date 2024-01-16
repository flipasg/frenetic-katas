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
});