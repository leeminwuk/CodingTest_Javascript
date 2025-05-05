import java.util.*;

class Solution {
    public int[] solution(String[] keymap, String[] targets) {
        Map<Character, Integer> pressCountMap = new HashMap<>();
        
        for(String key : keymap){
            for(int i =0; i < key.length(); i++){
                char c = key.charAt(i);
                int pressCount = i  + 1;
                
                if(!pressCountMap.containsKey(c) || pressCountMap.get(c) > pressCount){
                    pressCountMap.put(c,pressCount);
                }
            }
        }
        int [] result = new int[targets.length];
        for(int i = 0; i < targets.length; i++){
            String word = targets[i];
            int totalPress = 0;
            
            for(int j = 0; j < word.length(); j++){
                char c = word.charAt(j);
                if(pressCountMap.containsKey(c)){
                    totalPress += pressCountMap.get(c);
                }else{
                    totalPress = -1;
                    break;
                }
            }
            result[i] = totalPress;
        }
        return result;
    }
}