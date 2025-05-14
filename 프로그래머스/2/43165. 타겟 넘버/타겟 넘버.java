class Solution {
    public int solution(int[] numbers, int target) {
       return dfs(numbers,0,0,target);
    }
    private int dfs(int[] numbers, int depth, int sum, int target){
        if(depth == numbers.length){
            return sum == target ? 1 : 0;
        }
        int add = dfs(numbers, depth + 1, sum+ numbers[depth], target);
        int subtract = dfs(numbers, depth + 1, sum - numbers[depth], target);
        return add  + subtract;
    }
}