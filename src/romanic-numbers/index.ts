// export default function arabicToRomanic(arabicNumber: number, res = '') {
//   if (arabicNumber === 0) {
//     return res;
//   }

//   const ARABIC_ROMANIC: Record<number, string> = {
//     1: 'I',
//     5: 'V',
//     10: 'X',
//     50: 'L',
//     100: 'C',
//     500: 'D',
//     1000: 'M',
//   };

//   if (ARABIC_ROMANIC[arabicNumber]) {
//     return res + ARABIC_ROMANIC[arabicNumber];
//   }

//   const arabicNumbers = Object.keys(ARABIC_ROMANIC).map(Number);
//   const romanicNumbers = Object.values(ARABIC_ROMANIC);

//   const startIndex = arabicNumbers.findIndex((number) => {
//     return number > arabicNumber;
//   });

//   for (
//     let index = startIndex === -1 ? arabicNumbers.length - 1 : startIndex - 1;
//     index >= 0;
//     index--
//   ) {
//     const element = arabicNumbers[index];
//     if (arabicNumber === arabicNumbers[startIndex] - element) {
//       return (
//         res +
//         arabicToRomanic(
//           arabicNumber - (arabicNumbers[startIndex] - arabicNumbers[index]),
//           romanicNumbers[index] + romanicNumbers[startIndex]
//         )
//       );
//     }
//   }

//   for (
//     let index = startIndex === -1 ? arabicNumbers.length - 1 : startIndex - 1;
//     index >= 0;
//     index--
//   ) {
//     const element = +arabicNumbers[index];
//     if (arabicNumber >= element) {
//       return (
//         res + arabicToRomanic(arabicNumber - element, romanicNumbers[index])
//       );
//     }
//   }
// }

export default function arabicToRomanic(arabicNumber: number, res = '') {
  if (arabicNumber === 0) {
    return res;
  }

  const ARABIC_ROMANIC: Record<number, string> = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };

  if (ARABIC_ROMANIC[arabicNumber]) {
    return res + ARABIC_ROMANIC[arabicNumber];
  }

  const numerals = Object.entries(ARABIC_ROMANIC);

  const startIndex = numerals.findIndex(([number]) => {
    return +number > arabicNumber;
  });

  for (
    let index = startIndex === -1 ? numerals.length - 1 : startIndex - 1;
    index >= 0;
    index--
  ) {
    const [arabic, romanic] = numerals[index];
    return res + arabicToRomanic(arabicNumber - +arabic, romanic);
  }
}
