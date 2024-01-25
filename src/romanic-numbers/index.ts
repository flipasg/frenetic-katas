export default function arabicToRomanic(arabicNumber: number, res = '') {
  const ARABIC_ROMANIC: Record<number, string> = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L'
  };

  if (ARABIC_ROMANIC[arabicNumber]) {
    return res + ARABIC_ROMANIC[arabicNumber];
  }

  if (ARABIC_ROMANIC[arabicNumber + 1]) {
    return (
      res +
      arabicToRomanic(Math.abs(arabicNumber - (arabicNumber + 1))) +
      ARABIC_ROMANIC[arabicNumber + 1]
    );
  }

  const coco = Object.keys(ARABIC_ROMANIC);
  const roman = Object.values(ARABIC_ROMANIC);
  for (let index = coco.length - 1; index >= 0; index--) {
    const element = +coco[index];
    if (element < arabicNumber) {
      return res + arabicToRomanic(arabicNumber - element, roman[index]);
    }
  }
}
