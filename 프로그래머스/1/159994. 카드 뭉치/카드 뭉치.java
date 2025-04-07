class Solution {
    public String solution(String[] cards1, String[] cards2, String[] goal) {
        String answer = "";
        int pointer1 = 0;
        int pointer2 = 0;
        
    for (int i = 0; i < goal.length; i++) {
        String word = goal[i];
        
        if (pointer1 < cards1.length && cards1[pointer1].equals(word)) {
            pointer1++;
        } else if (pointer2 < cards2.length && cards2[pointer2].equals(word)) {
            pointer2++;
        } else {
            return "No";
        }
    }
    return "Yes";
  }
}