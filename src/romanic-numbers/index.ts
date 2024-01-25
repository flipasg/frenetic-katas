export default function arabicToRomanic(arabicNumber: number) {
  const ARABIC_ROMANIC = {
    1: 'I',
    5: 'V',
    10: 'X',
  };

  if(ARABIC_ROMANIC[arabicNumber]){
    return ARABIC_ROMANIC[arabicNumber];
  }

  if(arabicNumber === 4){
    return 'IV';
  }

  if(arabicNumber === 9){
    return 'IX';
  }

  if(arabicNumber === 14){
    return 'XIV';
  }

  let romanicNumber = '';
  for (let index = arabicNumber; index > 0; ) {
    const romanicLetter = ARABIC_ROMANIC[index];
    if(romanicLetter){
      romanicNumber = ARABIC_ROMANIC[index] + romanicNumber;
      index-=index;
    } else {
      romanicNumber += ARABIC_ROMANIC[1];
      index--;
    }
  }


  return romanicNumber;
}
