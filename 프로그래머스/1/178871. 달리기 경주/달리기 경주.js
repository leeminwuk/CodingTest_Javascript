function solution(players, callings) {
    const playerMap = new Map();
    players.forEach((player, index) => {
        playerMap.set(player, index);
    });

    callings.forEach(calling => {
        const currentIndex = playerMap.get(calling);
        
        if (currentIndex > 0) {
            const previousPlayer = players[currentIndex - 1];

            players[currentIndex] = previousPlayer;
            players[currentIndex - 1] = calling;

            playerMap.set(calling, currentIndex - 1);
            playerMap.set(previousPlayer, currentIndex);
        }
    });

    return players;
}

const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];
console.log(solution(players, callings)); 
