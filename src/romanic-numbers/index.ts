export default function arabicToRomanic(arabicNumber: number, res = '') {
  if (arabicNumber === 0) {
    return res;
  }

  const ARABIC_ROMANIC: Record<number, string> = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D'
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
    if (element <= arabicNumber) {
      return res + arabicToRomanic(arabicNumber - element, roman[index]);
    } else if (arabicNumber === element - +coco[index - 1]) {
      return res + roman[index - 1] + roman[index];
    } else if (arabicNumber === element - +coco[index - 2]) {
      return res + roman[index - 2] + roman[index];
    }
  }
}
