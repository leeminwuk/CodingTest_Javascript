const solution = (arr) => {
    const minValue = Math.min(...arr);
    const newArr = arr.filter(x => x !== minValue);
    return newArr.length ? newArr : [-1];
}