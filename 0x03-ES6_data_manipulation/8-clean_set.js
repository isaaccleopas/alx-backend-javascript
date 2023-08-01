export default function cleanSet(set, startString) {
  const valuesArray = [...set];
  const filteredValues = valuesArray.filter((value) => value.startsWith(startString));
  return filteredValues.join('-');
}
