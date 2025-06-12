import java.util.*;
class Solution {
    public int solution(int[] queue1, int[] queue2) {
        Queue<Integer> q1 = new ArrayDeque<>();
        Queue<Integer> q2 = new ArrayDeque<>();
        long sum1 = 0;
        long sum2 = 0;
        
        for(int i = 0; i <queue1.length; i++){
            q1.add(queue1[i]);
            sum1 += queue1[i];

            q2.add(queue2[i]);
            sum2 += queue2[i];
        }
        if((sum1 +sum2)% 2 != 0){
            return -1;
        }
        long targetSum = (sum1 + sum2)/2;
        int count = 0;
        
        int limit = queue1.length * 3;
        
        while(sum1 != targetSum){
            if(count > limit){
                return -1;
            }
            if(sum1 > targetSum){
                int val = q1.poll();
                q2.add(val);
                sum1 -= val;
                sum2 += val;
            }else{
                 int val = q2.poll();
                q1.add(val);
                sum1 += val;
                sum2 -= val;
            }
            count++;
        }
        return count;
    }
}