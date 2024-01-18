// Array approach
export default function anagram(
  word: string,
) {
  if(word.length < 1){
    return [word];
  }
  let anagrams: string[] = [];
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    const restOfChars = word.split('');
    restOfChars.splice(i, 1);

    anagram(restOfChars.join('')).forEach((anagram) => {
      anagrams.push(char + anagram);
    });

  }
  return anagrams;
}

