const solution = (arr, divisor) => {
    const filtered = arr.filter(num => num % divisor === 0);
    return filtered.length ? filtered.sort((a, b) => a - b) : [-1];
}