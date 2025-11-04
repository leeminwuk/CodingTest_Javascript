const solution = (age) => {
    const ageArray = ['a','b','c','d','e','f','g','h','i','j'];
    
    let answer = '';
    
    let ageStr = String(age);
    
    for(let i = 0; i < ageStr.length; i++){
        answer += ageArray[ageStr[i]];
    }
    return answer;
}