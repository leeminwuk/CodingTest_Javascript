const solution = (food) => {
    let left = '';
    let right = '';
    
    for (let i = 1; i < food.length; i++){
        const count = Math.floor(food[i] / 2);
        left += i.toString().repeat(count);
        right = i.toString().repeat(count) + right;
    }
    return left + '0' + right;
}
