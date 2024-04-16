function cleanSet(set, startString) {
  if (!startString) return ''; // If the startString is empty, return an empty string.

  const filteredValues = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      filteredValues.push(value.slice(startString.length));
    }
  }

  return filteredValues.join('-');
}

export default cleanSet;
