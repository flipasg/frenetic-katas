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
});