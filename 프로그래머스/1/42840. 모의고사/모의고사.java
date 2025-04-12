import java.util.*;

class Solution {
    public int[] solution(int[] answers) {
        // 수포자들의 정답 패턴 정의
        int[] student1_pattern = {1, 2, 3, 4, 5};
        int[] student2_pattern = {2, 1, 2, 3, 2, 4, 2, 5};
        int[] student3_pattern = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};

        // 각 수포자의 점수 계산
        int[] scores = new int[3]; 

        for (int i = 0; i < answers.length; i++) {
            if (answers[i] == student1_pattern[i % student1_pattern.length]) scores[0]++;
            if (answers[i] == student2_pattern[i % student2_pattern.length]) scores[1]++;
            if (answers[i] == student3_pattern[i % student3_pattern.length]) scores[2]++;
        }

        // 최고 점수 계산
        int maxScore = Math.max(scores[0], Math.max(scores[1], scores[2]));

        // 최고 점수를 받은 수포자 찾기
        List<Integer> highestScorers = new ArrayList<>();
        for (int i = 0; i < scores.length; i++) {
            if (scores[i] == maxScore) {
                highestScorers.add(i + 1); // 수포자는 인덱스가 아닌 번호로 표시됨 (1번부터 시작)
            }
        }

        // 결과를 배열로 변환하여 반환
        return highestScorers.stream().mapToInt(i -> i).toArray();
    }
}
