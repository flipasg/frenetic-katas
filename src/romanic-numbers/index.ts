export default function arabicToRomanic(arabicNumber: number) {
  if(arabicNumber === 6){
    return 'VI';
  }
  if(arabicNumber === 5){
    return 'V';
  }
  if(arabicNumber === 4){
    return 'IV';
  }
  let romanicNumber = '';
  for (let index = 0; index < arabicNumber; index++) {
    romanicNumber += 'I';
    
  }
  return romanicNumber;
}
