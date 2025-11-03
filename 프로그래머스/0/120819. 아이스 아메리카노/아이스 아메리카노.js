const solution = (money) => {
    let ice = Math.floor(money / 5500);
    let lessMoney = money % 5500;
    
    return [ice, lessMoney];
}