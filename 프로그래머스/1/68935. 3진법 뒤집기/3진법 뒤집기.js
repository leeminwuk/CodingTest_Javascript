const solution = (n) => {
    const ternary = n.toString(3);
    
    const reversedTernary = ternary.split('').reverse().join('');
    
    const result = parseInt(reversedTernary, 3);
    return result;
}