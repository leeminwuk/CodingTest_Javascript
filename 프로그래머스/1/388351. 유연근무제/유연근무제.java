class Solution {
    public int solution(int[] schedules, int[][] timelogs, int startday) {
        int n =schedules.length;
        int count = 0;
        
        for(int i = 0; i < n; i++){
            int allowedTime = add10M(schedules[i]);
            boolean isOnTime = true;
            
            for(int j = 0; j < 7; j++){
                int day = (startday + j - 1) %7 + 1;
                
                if (day >= 1 && day <= 5){
                    if(timelogs[i][j] > allowedTime){
                        isOnTime = false;
                        break;
                    }
                }
            }
            if (isOnTime){
                count++;
            }
        }
        return count;
    }
    private int add10M(int time){
        int hour = time / 100;
        int minute = time % 100;
        
        minute += 10;
        if(minute >= 60){
            hour++;
            minute -= 60;
        }
        return hour * 100 + minute;
    }
}