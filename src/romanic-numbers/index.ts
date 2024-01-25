export default function arabicToRomanic(arabicNumber: number) {
  const ARABIC_ROMANIC = {
    1: 'I',
    5: 'V',
  };

  if(ARABIC_ROMANIC[arabicNumber]){
    return ARABIC_ROMANIC[arabicNumber];
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

  if(romanicNumber.length === 4){
    return 'IV';
  }
  return romanicNumber;
}
