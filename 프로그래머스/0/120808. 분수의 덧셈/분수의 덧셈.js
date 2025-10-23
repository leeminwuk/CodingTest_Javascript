const solution =(numer1, denom1, numer2, denom2) =>{
    
    let numer = (numer1 * denom2) + (numer2 * denom1);
    let denom = (denom1 * denom2);
    
    const getGcd = (a,b) => (b === 0 ? a : getGcd(b, a%b));
    const gcd = getGcd(numer, denom);
    
    const answer = [numer / gcd, denom / gcd];
    
    return answer;
}