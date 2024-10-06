const solution = (a, b, n) => {
    let totalCola = 0;
    
    while (n >= a) {
        const newCola = Math.floor(n / a) * b;
        totalCola += newCola;
        n = newCola + (n % a);
    }
    return totalCola;
};