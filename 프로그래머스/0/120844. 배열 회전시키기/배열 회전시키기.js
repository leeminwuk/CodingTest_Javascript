const solution = (numbers, direction) => {
    if (direction === 'right'){
        const last = numbers[numbers.length - 1];
        const rest = numbers.slice(0, numbers.length - 1);
        return [last, ...rest];
    }else{
        const first = numbers[0];
        const rest = numbers.slice(1);
        return [...rest, first];
    }
    
}