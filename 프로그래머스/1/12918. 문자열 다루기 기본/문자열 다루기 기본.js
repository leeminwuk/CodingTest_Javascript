
const solution = (s) => {
    const lengthCheck = s.length === 4 || s.length === 6;
    const numberCheck = /^\d+$/.test(s);
    return lengthCheck && numberCheck;
}