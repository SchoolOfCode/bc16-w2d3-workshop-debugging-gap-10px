function countNumberOfNinesInNumber(number) {
  let count = 0;

  const numStr = number.toString();

  for (let i = 0; i < numStr.length; i++) {
    const digit = numStr[i];
    if ("9" === digit) {
      count++;
    }
  }

  return count;
}
