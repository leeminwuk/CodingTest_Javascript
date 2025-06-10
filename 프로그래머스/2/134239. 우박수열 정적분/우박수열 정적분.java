import java.util.*;

class Solution {
    public double[] solution(int k, int[][] ranges) {
        List<Integer> collatz = new ArrayList<>();
        collatz.add(k);

        // 1. 우박수열 생성
        while (k > 1) {
            if (k % 2 == 0) {
                k /= 2;
            } else {
                k = k * 3 + 1;
            }
            collatz.add(k);
        }

        int n = collatz.size();
        double[] area = new double[n - 1]; // 면적 저장 배열

        // 2. 사다리꼴 넓이 계산
        for (int i = 0; i < n - 1; i++) {
            area[i] = (collatz.get(i) + collatz.get(i + 1)) / 2.0;
        }

        // 3. 누적합 배열 생성
        double[] prefixSum = new double[n];
        for (int i = 1; i < n; i++) {
            prefixSum[i] = prefixSum[i - 1] + area[i - 1];
        }

        // 4. ranges 처리
        double[] result = new double[ranges.length];
        for (int i = 0; i < ranges.length; i++) {
            int start = ranges[i][0];
            int end = n - 1 + ranges[i][1]; // 실제 끝 인덱스 계산

            if (start > end) {
                result[i] = -1.0;
            } else {
                result[i] = prefixSum[end] - prefixSum[start];
            }
        }

        return result;
    }
}