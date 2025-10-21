const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.on('line', function(line){
    line.split('').forEach(char => console.log(char));
});