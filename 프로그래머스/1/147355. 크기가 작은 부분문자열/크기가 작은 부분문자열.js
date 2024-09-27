const solution = (t, p) => {
    let answer = 0;
    const pLenth = p.length;
    const pNumber = parseInt(p, 10);
    
    for (let i =0; i <= t.length - pLenth; i++){
        const subStr = t.substring(i, i+pLenth);
        const subNumber = parseInt(subStr, 10);
        if (subNumber <= pNumber){
            answer++;
        }
    }
    return answer;
}


