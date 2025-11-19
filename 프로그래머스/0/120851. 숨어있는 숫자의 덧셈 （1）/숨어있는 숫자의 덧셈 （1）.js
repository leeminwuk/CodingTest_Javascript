const solution = (my_string) => {
    let answer = 0;
    for (let i = 0; i < my_string.length; i++){
        const num = Number(my_string[i]);
        
        if(!isNaN(num)){
            answer += num;
        }
    }
    return answer;
}