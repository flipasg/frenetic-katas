import { describe, expect, test } from 'vitest';
import arabicToRomanic from '.';

describe('Romanic Numbers', () => {
  test('should return I if the input is 1', async () => {
    expect(arabicToRomanic(1)).toBe('I');
  });

  test('should return II if the input is 2', async () => {
    expect(arabicToRomanic(2)).toBe('II');
  });

  test('should return III if the input is 3', async () => {
    expect(arabicToRomanic(3)).toBe('III');
  });

  test('should return IV if the input is 4', async () => {
    expect(arabicToRomanic(4)).toBe('IV');
  });

  test('should return V if the input is 5', async () => {
    expect(arabicToRomanic(5)).toBe('V');
  });

  test('should return VI if the input is 6', async () => {
    expect(arabicToRomanic(6)).toBe('VI');
  });

  test('should return VII if the input is 7', async () => {
    expect(arabicToRomanic(7)).toBe('VII');
  });

  test('should return VIII if the input is 8', async () => {
    expect(arabicToRomanic(8)).toBe('VIII');
  });

  test('should return IX if the input is 9', async () => {
    expect(arabicToRomanic(9)).toBe('IX');
  });

  test('should return X if the input is 10', async () => {
    expect(arabicToRomanic(10)).toBe('X');
  });

  test('should return XI if the input is 11', async () => {
    expect(arabicToRomanic(11)).toBe('XI');
  });

  test('should return XII if the input is 12', async () => {
    expect(arabicToRomanic(12)).toBe('XII');
  });

  test('should return XIII if the input is 13', async () => {
    expect(arabicToRomanic(13)).toBe('XIII');
  });

  test('should return XIV if the input is 14', async () => {
    expect(arabicToRomanic(14)).toBe('XIV');
  });

  test('should return XV if the input is 15', async () => {
    expect(arabicToRomanic(15)).toBe('XV');
  });

  test('should return XVI if the input is 16', async () => {
    expect(arabicToRomanic(16)).toBe('XVI');
  });

  test('should return XVII if the input is 17', async () => {
    expect(arabicToRomanic(17)).toBe('XVII');
  });

  test('should return XVIII if the input is 18', async () => {
    expect(arabicToRomanic(18)).toBe('XVIII');
  });

  test('should return XIX if the input is 19', async () => {
    expect(arabicToRomanic(19)).toBe('XIX');
  });

  test('should return XX if the input is 20', async () => {
    expect(arabicToRomanic(20)).toBe('XX');
  });

  test('should return XXX if the input is 30', async () => {
    expect(arabicToRomanic(30)).toBe('XXX');
  });

  test('should return XL if the input is 40', async () => {
    expect(arabicToRomanic(40)).toBe('XL');
  });

  test('should return L if the input is 50', async () => {
    expect(arabicToRomanic(50)).toBe('L');
  });

  test('should return LX if the input is 60', async () => {
    expect(arabicToRomanic(60)).toBe('LX');
  });

  test('should return LXX if the input is 70', async () => {
    expect(arabicToRomanic(70)).toBe('LXX');
  });

  test('should return LXXX if the input is 80', async () => {
    expect(arabicToRomanic(80)).toBe('LXXX');
  });

  test('should return XC if the input is 90', async () => {
    expect(arabicToRomanic(90)).toBe('XC');
  });

});