const solution = (n, control) => {
    const wsda = {
        w : 1,
        s : -1,
        d : 10,
        a : -10,
    };
    for (let i = 0; i < control.length; i++){
        n += wsda[control[i]];
    }
    return n;
}