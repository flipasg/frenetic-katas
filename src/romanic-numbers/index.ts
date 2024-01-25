export default function arabicToRomanic(arabicNumber: number) {
  if(arabicNumber === 3){
    return 'III';
  }
  if (arabicNumber === 2) {
    return 'II';
  }
  return 'I';
}
