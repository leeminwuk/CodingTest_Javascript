const solution = (n) =>{
    return factorial(1, 1, n);
}
function factorial(i, currentFactorial, n){
    const nextFactorial = currentFactorial * (i + 1);
    if (nextFactorial > n){
        return i;
    }
    return factorial(i + 1, nextFactorial, n);
}