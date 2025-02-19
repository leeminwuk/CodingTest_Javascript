function solution(wallpaper) {
    
    let minRow = Infinity;
    let minCol = Infinity;
    let maxRow = 0;
    let maxCol = 0;
    
    for (let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] === '#') {
                minRow = Math.min(minRow, i);
                minCol = Math.min(minCol, j);
                maxRow = Math.max(maxRow, i);
                maxCol = Math.max(maxCol, j);
            }
        }
    }
  return [minRow, minCol, maxRow + 1, maxCol + 1];
}