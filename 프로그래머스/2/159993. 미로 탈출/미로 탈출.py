from collections import deque

def solution(maps):
    rows, cols = len(maps), len(maps[0])
    
    for r in range(rows):
        for c in range(cols):
            if maps[r][c] == 'S':
                start = (r, c)
            elif maps[r][c] == 'L':
                lever = (r, c)
            elif maps[r][c] == 'E':
                end = (r, c)

    def bfs(start_pos, end_pos):
        queue = deque([(start_pos[0], start_pos[1], 0)])
        visited = [[False] * cols for _ in range(rows)]
        visited[start_pos[0]][start_pos[1]] = True

        while queue:
            r, c, dist = queue.popleft()

            if (r, c) == end_pos:
                return dist

            for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nr, nc = r + dr, c + dc

                if 0 <= nr < rows and 0 <= nc < cols and not visited[nr][nc] and maps[nr][nc] != 'X':
                    visited[nr][nc] = True
                    queue.append((nr, nc, dist + 1))
        
        return -1

    dist_to_lever = bfs(start, lever)
    if dist_to_lever == -1:
        return -1

    dist_to_end = bfs(lever, end)
    if dist_to_end == -1:
        return -1
    
    return dist_to_lever + dist_to_end