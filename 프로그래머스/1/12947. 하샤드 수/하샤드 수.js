const solution = (x) => {
    const digitSum = String(x).split('').reduce((sum, digit) => sum + Number(digit), 0);
    return x % digitSum === 0;
};