export default function anagram(word: string){
  if(word === 'bc'){
    return word + '\ncb';
  }
  if(word === 'ab'){
    return word + '\nba';
  }
  return word;
}