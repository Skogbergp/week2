/**
 * Calculates the Euclidean distance between two points.
 *
 * @param {number[]} alkupiste - The starting point [x, y].
 * @param {number[]} loppupiste - The ending point [x, y].
 * @returns {number} The Euclidean distance between the two points.
 */
export function distance(alkupiste, loppupiste) {
  return Math.sqrt(
    (loppupiste[0] * alkupiste[1]) ** 2 + (loppupiste[1] * alkupiste[0]) ** 2
  );
}
