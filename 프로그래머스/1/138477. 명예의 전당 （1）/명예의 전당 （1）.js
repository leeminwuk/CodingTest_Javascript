const solution = (k, score) => {
    const hallOfFame = [];
    const result = [];
    
    score.forEach((s, index) => {
        hallOfFame.push(s);
        hallOfFame.sort((a, b) => b - a);
        
        if (hallOfFame.length > k) {
            hallOfFame.pop();
        }
        result.push(hallOfFame[hallOfFame.length - 1]);
    })
    return result;
}