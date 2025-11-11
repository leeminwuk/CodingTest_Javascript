const solution = (numbers, k) => {
    const n = numbers.length;
    
    const throwBall = ((k -1)*2)%n;
    return numbers[throwBall];
}