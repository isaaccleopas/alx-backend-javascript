export default function cleanSet(set, startString) {
  let res = '';

  if (!startString || !startString.length) {
    return res;
  }

  for (const element of set) {
    if (element && element.startsWith(startString)) {
      res += `${element.slice(startString.length)}-`;
    }
  }

  return res.slice(0, -1);
}
