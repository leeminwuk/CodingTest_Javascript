const solution = (arr, queries) => {
    for (let k = 0; k < queries.length; k++) {
        const i = queries[k][0];
        const j = queries[k][1];

        const temp = arr[i];
        arr[i] = arr[j];    
        arr[j] = temp;      
    }
    return arr;
}