const solution = (k, tangerine) => {
    const frequencyMap = tangerine.reduce((acc, size) =>{
        acc[size] = (acc[size] || 0) + 1;
        return acc;
    },{});
    const frequencies = Object.values(frequencyMap).sort((a, b) => b - a);
    let count = 0;
    let total = 0;
    
    for (let freq of frequencies){
        total += freq;
        count++;
        if (total >= k)
            break;
    }
    return count;
}