class Solution {
    public String solution(String video_len, String pos, String op_start, String op_end, String[] commands) {
        int videoLenSec = toSeconds(video_len);
        int posSec = toSeconds(pos);
        int opStartSec = toSeconds(op_start);
        int opEndSec = toSeconds(op_end);
        
        if(posSec >= opStartSec && posSec <= opEndSec) {
            posSec = opEndSec;
        }

        for(String command : commands) {
            if(command.equals("prev")) {
                posSec = Math.max(0, posSec - 10);
            } else if (command.equals("next")) {
                posSec = Math.min(videoLenSec, posSec + 10);
            }

            if(posSec >= opStartSec && posSec <= opEndSec) {
                posSec = opEndSec;
            }
        }

        return toTimeString(posSec); 
    }

    public int toSeconds(String time) {
        String[] parts = time.split(":");
        int m = Integer.parseInt(parts[0]);
        int s = Integer.parseInt(parts[1]);
        return m * 60 + s;
    }

    public String toTimeString(int totalS) {
        int m = totalS / 60;
        int s = totalS % 60;
        return String.format("%02d:%02d", m, s);
    }
}