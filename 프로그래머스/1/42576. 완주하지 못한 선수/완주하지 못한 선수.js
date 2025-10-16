const solution = (participant, completion) => {
    const participantMap = new Map();

    for (let i = 0; i < participant.length; i++) {
        const p = participant[i];
        participantMap.set(p, (participantMap.get(p) || 0) + 1);
    }

    for (let i = 0; i < completion.length; i++) {
        const c = completion[i];
        participantMap.set(c, participantMap.get(c) - 1);
    }

    let answer = '';
    participantMap.forEach((count, name) => {
        if (count > 0) {
            answer = name;
        }
    });

    return answer;
};