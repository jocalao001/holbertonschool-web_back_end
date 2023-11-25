export default function appendToEachArrayValue(array, appendString) {
  const lis = [];
  for (const idx of array) {
    lis.push(appendString + idx);
  }

  return lis;
}
