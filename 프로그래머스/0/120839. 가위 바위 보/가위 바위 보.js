const solution = (rsp) => {
    let answer = '';
    const win = {
        '2': '0', 
        '0': '5',
        '5': '2'
    };
    for(let i = 0; i < rsp.length;i++){
        answer += win[rsp[i]];
    }
    return answer;
}