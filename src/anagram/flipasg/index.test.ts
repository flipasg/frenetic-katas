import { describe, expect, test } from 'vitest';
import anagram from '.';

describe('flipasg > Anagram', () => {
  test('should return the same string if input is "a"', () => {
    const input = 'a';

    expect(anagram(input).join(' ')).toBe('a');
  });

  test('should return the same string if input is "b"', () => {
    const input = 'b';

    expect(anagram(input).join(' ')).toBe('b');
  });

  test('should return the same string if input is "c"', () => {
    const input = 'c';

    expect(anagram(input).join(' ')).toBe('c');
  });
  test('should return all combinations for input "ab"', () => {
    const input = 'ab';

    expect(anagram(input).join(' ')).toBe('ab ba');
  });
  test('should return all combinations for input "bc"', () => {
    const input = 'bc';

    expect(anagram(input).join(' ')).toBe('bc cb');
  });
  test('should return all combinations for input "cd"', () => {
    const input = 'cd';

    expect(anagram(input).join(' ')).toBe('cd dc');
  });

  test('should return all combinations for input "abc"', () => {
    const input = 'abc';

    expect(anagram(input).join(' ')).toBe('abc acb bac bca cab cba');
  });

  test('should return all combinations for input "def"', () => {
    const input = 'def';

    expect(anagram(input).join(' ')).toBe('def dfe edf efd fde fed');
  });

  test('should return all combinations for input "ghi"', () => {
    const input = 'ghi';

    expect(anagram(input).join(' ')).toBe('ghi gih hgi hig igh ihg');
  });

  test('should return all combinations for input "abcd"', () => {
    const input = 'abcd';

    expect(anagram(input).join(' ')).toBe(
      'abcd abdc acbd acdb adbc adcb bacd badc bcad bcda bdac bdca cabd cadb cbad cbda cdab cdba dabc dacb dbac dbca dcab dcba'
    );
  });

  test('should return all combinations for input "efgh"', () => {
    const input = 'efgh';

    expect(anagram(input).join(' ')).toBe(
      'efgh efhg egfh eghf ehfg ehgf fegh fehg fgeh fghe fheg fhge gefh gehf gfeh gfhe ghef ghfe hefg hegf hfeg hfge hgef hgfe'
    );
  });

  test('should return all combinations for input "ijkl"', () => {
    const input = 'ijkl';

    expect(anagram(input).join(' ')).toBe(
      'ijkl ijlk ikjl iklj iljk ilkj jikl jilk jkil jkli jlik jlki kijl kilj kjil kjli klij klji lijk likj ljik ljki lkij lkji'
    );
  });

  test('should return all combinations for input "biro"', () => {
    const input = 'biro';

    expect(anagram(input).join(' ')).toBe(
      'biro bior brio broi boir bori ibro ibor irbo irob iobr iorb rbio rboi ribo riob robi roib obir obri oibr oirb orbi orib'
    );
  });

  test('should return all combinations for input "ruben"', () => {
    const input = 'ruben';

    expect(anagram(input).join(' ')).toBe(
      'ruben rubne ruebn ruenb runbe runeb rbuen rbune rbeun rbenu rbnue rbneu reubn reunb rebun rebnu renub renbu rnube rnueb rnbue rnbeu rneub rnebu urben urbne urebn urenb urnbe urneb ubren ubrne ubern ubenr ubnre ubner uerbn uernb uebrn uebnr uenrb uenbr unrbe unreb unbre unber unerb unebr bruen brune breun brenu brnue brneu buren burne buern buenr bunre buner berun bernu beurn beunr benru benur bnrue bnreu bnure bnuer bneru bneur erubn erunb erbun erbnu ernub ernbu eurbn eurnb eubrn eubnr eunrb eunbr ebrun ebrnu eburn ebunr ebnru ebnur enrub enrbu enurb enubr enbru enbur nrube nrueb nrbue nrbeu nreub nrebu nurbe nureb nubre nuber nuerb nuebr nbrue nbreu nbure nbuer nberu nbeur nerub nerbu neurb neubr nebru nebur'
    );
  });
});
