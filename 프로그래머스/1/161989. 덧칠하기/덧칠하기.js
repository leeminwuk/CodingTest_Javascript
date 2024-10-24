const solution = (n, m, section) => {
  let count = 0; 
  let lastCovered = 0; 

  section.forEach(s => {
    if (s > lastCovered) {
      lastCovered = s + m - 1;
      count++;
    }
  });

  return count;
};
