import java.util.*;

class Solution {
    public String[] solution(String[] record) {
        Map<String, String> userInfo = new HashMap<>();
        List<String[]> actionLog = new ArrayList<>();
        
        for(String rec : record){
            String[] parts = rec.split(" ");
            String action = parts[0];
            String uid = parts[1];
            
            if(action.equals("Enter")){
                userInfo.put(uid, parts[2]);
                actionLog.add(new String[]{action, uid});
            }else if (action.equals("Leave")){
                actionLog.add (new String[]{action, uid});
            }else{
                userInfo.put(uid, parts[2]);
            }
        }
        String[] answer = new String[actionLog.size()];
        for (int i = 0; i < actionLog.size(); i++){
            String[] log = actionLog.get(i);
            String action = log[0];
            String uid = log[1];
            
            String nickname= userInfo.get(uid);
            if(action.equals("Enter")){
                answer[i] = nickname + "님이 들어왔습니다.";
            }else{
                answer[i] = nickname + "님이 나갔습니다.";
        }
        }
                        return answer;

    }
}