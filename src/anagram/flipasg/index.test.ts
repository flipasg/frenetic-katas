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
});