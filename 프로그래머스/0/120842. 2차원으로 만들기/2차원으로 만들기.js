const solution = (num_list, n) => {
    const answer = [];
    for (let i = 0; i < num_list.length; i+=n){
        const chunk = num_list.slice(i, i+n);
        answer.push(chunk);
    }
    return answer;
}