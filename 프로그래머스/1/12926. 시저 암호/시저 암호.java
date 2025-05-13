class Solution {
    public String solution(String s, int n) {
        StringBuilder answer = new StringBuilder();
        for(char c : s.toCharArray()){
            if(c == ' '){
                answer.append(' ');
            }else if (c >= 'A' && c <= 'Z'){
                char shifted = (char) (((c - 'A' + n)%26)+'A');
                answer.append(shifted);
            }else if ( c >= 'a' && c <= 'z'){
                char shifted = (char) (((c- 'a' +n)%26) + 'a');
                answer.append(shifted);
            }
        }
        return answer.toString();
    }
}
