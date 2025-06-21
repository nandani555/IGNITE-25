/** 
 * @param {string} input
 * @returns {{
 *   wc: number,
 *   cc: number,
 *   sc: number,
 *   longestWord: string,
 *   titleCased: string,
 *   cleaned: string
 * }}
 */
function analyzeText(input) {
 
  const cleaned = input.trim().replace(/\s+/g, ' ');//removing spaces leading trailing
  const words = cleaned ? cleaned.split(' ') : [];//charcter count
  const sc = (cleaned.match(/[\.\!\?]+/g) || []).length;//sentence count
  const cc = cleaned.length;

  // Find longest word
  let longestWord = '';
  for (const w of words) {
    if (w.length > longestWord.length) longestWord = w;
  }

  const titleCased = words
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');

  return {
    wc: words.length,
    cc,
    sc,
    longestWord,
    titleCased,
    cleaned
  };
}
