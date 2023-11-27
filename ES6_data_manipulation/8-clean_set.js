export default function cleanSet(set, startString) {
  const fin = [];
  if (startString && typeof startString === 'string') {
    const arr = Array.from(set);
    arr.forEach((str) => {
      if (str && str.startsWith(startString)) fin.push(str.slice(startString.length));
    });
  }
  return fin.join('-');
}
