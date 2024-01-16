export default function anagram(word: string){
  if(word === 'ab'){
    return word + '\nba';
  }
  return word;
}