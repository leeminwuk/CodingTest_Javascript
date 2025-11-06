const solution = (balls, share) => {
    let answer = 1;
    
    if(share > balls - share){
        share = balls - share;
    }
    for(let i = 1; i <= share; i++){
        answer = (answer * (balls - i + 1)) / i;
    }
    return answer;
}