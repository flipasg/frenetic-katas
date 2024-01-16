export default function anagram(word: string){
  if(word.length === 2){
    return word + '\n' + word[1] + word[0];
  }
  return word;
}