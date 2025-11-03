const solution = (num_list) =>{
    let evenCount = 0;
    let oddCount = 0;
    
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0){
            evenCount++;
        }else{
            oddCount++;
        }
    }
    return [evenCount, oddCount];
}