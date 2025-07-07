import java.util.*;
class Solution {
    public int solution(int bridge_length, int weight, int[] truck_weights) {
        int answer = 0;
        int bridgeWeight = 0;
        
    Queue<Integer> bridge = new LinkedList<>();
        
        for(int i = 0; i < bridge_length; i++){
            bridge.add(0);
        }
        for(int truck : truck_weights){
            while(true){
                answer++;
                
                bridgeWeight -= bridge.poll();
                
                if (bridgeWeight + truck <= weight){
                    bridge.add(truck);
                    bridgeWeight += truck;
                    break;
                }else{
                    bridge.add(0);
                }
            }
        }
         return answer + bridge_length;
    }
}