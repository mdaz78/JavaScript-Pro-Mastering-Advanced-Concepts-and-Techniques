/**
 *
 *
 * ArrayUtils exercise
 *
 * Implement a class named ArrayUtils that cannot be instantiated and contains
 * static methods average and max. If the class is instantiated throw an error
 * with the message 'ArrayUtils cannot be instantiated.'
 *
 * The average method should return the average of an array of numbers. If the
 * array is empty, throw an error with the message 'Array cannot be empty.'
 *
 * The max method should return the largest number from an array of numbers. You
 * can assume you will always get passed an array of numbers
 *
 */
class ArrayUtils {
  constructor() {
    throw new Error('ArrayUtils cannot be instantiated.');
  }

  /**
   * Calculates the average of an array of numbers.
   * @param {number[]} array - The array of numbers.
   * @returns {number} The average of the numbers.
   */
  static average(array) {
    if (!array || array.length === 0) {
      throw new Error('Array cannot be empty.');
    }

    const sum = array.reduce((acc, num) => acc + num, 0);
    return sum / array.length;
  }

  /**
   * Finds the largest number in an array.
   * @param {number[]} array - The array of numbers.
   * @returns {number} The largest number in the array.
   */
  static max(array) {
    if (!array || array.length === 0) {
      throw new Error('Array cannot be empty.');
    }

    return array.reduce(
      (max, currentNum) => (currentNum > max ? currentNum : max),
      -Infinity
    );
  }
}
