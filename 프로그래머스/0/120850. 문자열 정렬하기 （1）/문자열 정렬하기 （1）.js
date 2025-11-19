const solution = (my_string) => {
    return my_string.split('').filter(char => ! isNaN(Number(char))).map(Number).sort((a,b) => a - b);
}