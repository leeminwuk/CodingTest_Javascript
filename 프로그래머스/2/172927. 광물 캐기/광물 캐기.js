const solution = (picks, minerals) => {
    let answer = 0;
    const totalPicks = picks.reduce((sum, val) => sum + val, 0);
    
    if (totalPicks === 0){
        return 0;
    }
    const maxMinerals = totalPicks * 5;
    const effectiveMinerals = minerals.slice(0, maxMinerals);
    
    const chunks = [];
    for (let i = 0; i < effectiveMinerals.length; i  += 5){
        const chunk = effectiveMinerals.slice(i, i +5);
        let fatigureScore = 0;
        
        chunk.forEach(mineral => {
            if(mineral === 'diamond') fatigureScore += 25;
            else if (mineral === 'iron') fatigureScore += 5;
            else fatigureScore += 1;
        });
        chunks.push({minerals: chunk, score : fatigureScore});
    }
    chunks.sort((a,b) => b.score - a.score);
    
    for (let i = 0; i < chunks.length; i++){
        const chunk = chunks[i];
        let pickType;
        
        if(picks[0] > 0){
            pickType = 0;
            picks[0]--;
        }else if(picks[1] > 0){
            pickType = 1;
            picks[1]--;
        }else {
            pickType = 2;
            picks[2]--;
        }
        for( let j = 0; j < chunk.minerals.length; j++){
            const mineral = chunk.minerals[j];
            
            if(pickType === 0){
                answer += 1;
            }else if (pickType === 1){
                answer += (mineral === 'diamond' ? 5 : 1);
            }else{
                if(mineral === 'diamond' ) answer += 25;
                else if (mineral === 'iron') answer += 5;
                else answer += 1;
            }
        }
    }
    return answer;
}