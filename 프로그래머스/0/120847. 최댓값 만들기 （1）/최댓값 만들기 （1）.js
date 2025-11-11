const solution = (numbers) => {
    numbers.sort((a,b) => a - b);
    const n = numbers.length;
    
    const p = numbers[n -1] * numbers[n - 2];
    const q = numbers[0] * numbers[1];
    
    return Math.max(p,q);
}