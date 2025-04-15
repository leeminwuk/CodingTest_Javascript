import java.util.Stack;

class Solution {
    public int solution(int[][] board, int[] moves) {
        int n = board.length;
        Stack<Integer> basket = new Stack<>();
        int removedDolls = 0;
        
        for (int i = 0; i < moves.length; i++) {
            int move = moves[i];
            int column = move - 1;
            
            for (int row = 0; row < n; row++) {
                if (board[row][column] != 0) {
                    int doll = board[row][column];
                    board[row][column] = 0;
                    
                    if (!basket.isEmpty() && basket.peek() == doll) {
                        basket.pop();
                        removedDolls += 2;
                    } else {
                        basket.push(doll);
                    }
                    break;
                }
            }
        }
        return removedDolls;
    }
}
