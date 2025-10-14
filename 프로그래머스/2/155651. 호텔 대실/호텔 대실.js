function solution(book_time) {
    const times = book_time.map(([start, end]) => {
        const [startHour, startMinute] = start.split(':').map(Number);
        const [endHour, endMinute] = end.split(':').map(Number);
        
        return [startHour * 60 + startMinute, endHour * 60 + endMinute];
    });
    times.sort((a,b) => a[0] - b[0]);
    
    const rooms = [];
    
    for (const [start, end] of times) {
        const earliestCheckout = rooms[0];
        if(rooms.length > 0 && start >= earliestCheckout){
            rooms.shift();
        }
        rooms.push(end + 10);
        
        rooms.sort((a,b) => a - b);
    }
    return rooms.length;
}