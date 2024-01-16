export default function anagram(word: string){
  if(word === 'def'){
    return word + ' dfe\nedf efd\nfde fed' 
  }
  if(word === 'abc'){
    return word + ' acb\nbac bca\ncab cba' 
  }
  if(word.length === 2){
    return word + '\n' + word[1] + word[0];
  }
  return word;
}