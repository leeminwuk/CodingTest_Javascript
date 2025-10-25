const solution =(n) => {
    const a = [];
    
    for( let i = 0 ; i <= n; i++){
        if(i % 2 === 1){
            a.push(i);
        }
    }
    return a;
}