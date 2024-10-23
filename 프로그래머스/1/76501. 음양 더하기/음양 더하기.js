const solution = (absolutes, signs) => {
  return absolutes.reduce((acc, val, idx) => {
    return acc + (signs[idx] ? val : -val);
  }, 0);
};