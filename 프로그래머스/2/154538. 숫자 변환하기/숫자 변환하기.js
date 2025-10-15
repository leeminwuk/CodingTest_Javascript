function solution(x, y, n) {
    if (x === y) {
        return 0;
    }
    const queue = [[x, 0]];
    const visited = new Set([x]);
    
    let head = 0;
    
    while (head < queue.length){
        const [current, count] = queue[head++];
        
        let next = current + n;
        
        if (next === y ) return count +1;
        if(next < y && !visited.has(next)){
            visited.add(next);
            queue.push([next, count + 1]);
        }
        next = current * 2;
        if (next === y) return count +1;
        if(next < y && !visited.has(next)){
            visited.add(next);
            queue.push([next,count +1]);
        }
        next = current *3;
        if (next === y ) return count +1;
        if(next < y && !visited.has(next)){
            visited.add(next);
            queue.push([next, count +1]);
        }
    }
    return -1;
} 