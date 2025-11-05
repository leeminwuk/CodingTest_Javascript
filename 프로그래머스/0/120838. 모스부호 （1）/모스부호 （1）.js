const solution = (letter) => {
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    };
    
    const morseArray = letter.split(' ');
    let answer = '';
    
    for ( let i = 0; i < morseArray.length; i++){
        answer += morse[morseArray[i]];
    }
    return answer;
}