const solution = (s, skip, index) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const skipSet = new Set(skip);
    let result = '';

    for (let char of s) {
        let currentIndex = alphabet.indexOf(char);
        let steps = 0;

        
        while (steps < index) {
            currentIndex = (currentIndex + 1) % 26;
            if (!skipSet.has(alphabet[currentIndex])) { 
                steps++;
            }
        }

        result += alphabet[currentIndex];
    }

    return result;
};