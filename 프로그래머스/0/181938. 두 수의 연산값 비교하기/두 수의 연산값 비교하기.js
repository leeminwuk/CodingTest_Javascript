const solution = (a, b) =>{
    const join = Number(String(a) + String(b));
    
    const val = 2 * a * b;
    
    return Math.max(join, val);
}