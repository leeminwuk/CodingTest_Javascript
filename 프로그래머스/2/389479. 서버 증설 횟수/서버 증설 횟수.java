import java.util.*;

class Solution {
    public int solution(int[] players, int m, int k) {
        int answer = 0;
        int[] installs = new int[24];

        for (int t = 0; t < 24; t++) {
            int required = players[t] / m;
            if (required == 0) {
                continue;
            }

            int online = 0;
            for (int i = 1; i < k; i++) {
                if (t - i >= 0) {
                    online += installs[t - i];
                }
            }

            int newInstalls = required - online;

            if (newInstalls > 0) {
                installs[t] = newInstalls;
                answer += newInstalls;
            }
        }
        return answer;
    }
}