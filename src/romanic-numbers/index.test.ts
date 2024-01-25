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
  
});