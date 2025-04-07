class Solution {
    public int[] solution(String s) {
        int n = s.length();
        int[] answer = new int [n];
        int[] lastIndex = new int[26];
        for (int i = 0; i< 26; i++){
            lastIndex[i] = -1;
        }
        for(int i = 0; i < n; i++){
            char c = s.charAt(i);
            
            int index = c - 'a';
            
            if(lastIndex[index] == -1){
                answer[i] = -1;
            }else {
                answer[i] = i - lastIndex[index];
                
            }
            lastIndex[index] = i;
        }
        return answer;
    }
}