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

    expect(anagram(input)).toBe('ab ba')
  });
  test('should return all combinations for input "bc"', () => {
    const input = 'bc';

    expect(anagram(input)).toBe('bc cb')
  });
  test('should return all combinations for input "cd"', () => {
    const input = 'cd';

    expect(anagram(input)).toBe('cd dc')
  });

  test('should return all combinations for input "abc"', () => {
    const input = 'abc';

    expect(anagram(input)).toBe('abc acb bac bca cab cba')
  });

  test('should return all combinations for input "def"', () => {
    const input = 'def';

    expect(anagram(input)).toBe('def dfe edf efd fde fed')
  });

  test('should return all combinations for input "ghi"', () => {
    const input = 'ghi';

    expect(anagram(input)).toBe('ghi gih hgi hig igh ihg')
  });

  test('should return all combinations for input "abcd"', () => {
    const input = 'abcd';

    expect(anagram(input)).toBe('abcd abdc acbd acdb adbc adcb bacd badc bcad bcda bdac bdca cabd cadb cbad cbda cdab cdba dabc dacb dbac dbca dcab dcba')
  });

  test('should return all combinations for input "efgh"', () => {
    const input = 'efgh';

    expect(anagram(input)).toBe('efgh efhg egfh eghf ehfg ehgf fegh fehg fgeh fghe fheg fhge gefh gehf gfeh gfhe ghef ghfe hefg hegf hfeg hfge hgef hgfe')
  });

  test('should return all combinations for input "ijkl"', () => {
    const input = 'ijkl';

    expect(anagram(input)).toBe('ijkl ijlk ikjl iklj iljk ilkj jikl jilk jkil jkli jlik jlki kijl kilj kjil kjli klij klji lijk likj ljik ljki lkij lkji')
  });

  test('should return all combinations for input "biro"', () => {
    const input = 'biro';

    expect(anagram(input)).toBe('biro bior brio broi boir bori ibro ibor irbo irob iobr iorb rbio rboi ribo riob robi roib obir obri oibr oirb orbi orib')
  });
  

});