const solution = (array) => {
    if (array.length === 1) return array[0];
    
    const counts = new Map();
    
    for( let i  = 0; i < array.length; i++){
        counts.set(array[i], (counts.get(array[i]) || 0) + 1);
    }
    
    let mode = -1;
    let maxCount = 0;
    let tie = false;
    
    counts.forEach((count, number)=>{
        if(count > maxCount){
            maxCount = count;
            mode = number;
            tie = false;
        }else if (count === maxCount) {
            tie = true;
        }
    });
    return tie ? -1 : mode;
}