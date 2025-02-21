function solution(number, limit, power) {
    let totalIron = 0;
    
    const divisorCounts = new Array(number + 1).fill(0);
    
    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            divisorCounts[j]++;
        }
    }
    
    for (let i = 1; i <= number; i++) {
        const attack = divisorCounts[i] > limit ? power : divisorCounts[i];
        totalIron += attack;
    }
    
    return totalIron;
}

