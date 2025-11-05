const solution = (hp) => {
    let generalAnt = 5;
    let soldierAnt = 3;
    let workAnt = 1;
    
    let answer = 0;
    
    answer += Math.floor(hp / generalAnt);
    hp = hp % generalAnt;
    
    answer += Math.floor(hp / soldierAnt);
    hp = hp % soldierAnt;
    
    answer += hp;
    
    return answer;
}