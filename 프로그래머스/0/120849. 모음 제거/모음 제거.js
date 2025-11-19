const solution = (my_string) => {
    const vowels = 'aeiou'; 
    return my_string.split('').filter(char => !vowels.includes(char)).join('');
}