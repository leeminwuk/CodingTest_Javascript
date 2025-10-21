const solution = (num_list) => {
    const product = num_list.reduce((acc, cur) => acc * cur, 1);
    
    const sum = num_list.reduce((acc,cur) => acc + cur, 0);
    
    return product < sum * sum ? 1 : 0;
}