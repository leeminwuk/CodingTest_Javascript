class Solution {
    public int[] solution(int[] numbers) {
        boolean[] found = new boolean[201];
        
        for (int i = 0; i < numbers.length; i++) {
            for (int j = i + 1; j < numbers.length; j++) {
                int sum = numbers[i] + numbers[j];
                found[sum] = true;
            }
        }
        
        int count = 0;
        for (int i = 0; i < found.length; i++) {
            if (found[i]) {
                count++;
            }
        }
        
        int[] answer = new int[count];
        int index = 0;
        for (int i = 0; i < found.length; i++) {
            if (found[i]) {
                answer[index++] = i;
            }
        }
        
        return answer;
    }
}
