const solution = (a, b) => a.reduce((acc, curr, idx) => acc + curr * b[idx], 0);
