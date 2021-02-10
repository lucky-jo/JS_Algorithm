function solution(v) {
    let answer =''
    function DFS(v) {
        if (v > 7) {
            return
        } else {
            DFS(v * 2);
            answer += v + ' '
            DFS(v * 2 + 1);
        }
    }
    DFS(v)
    return answer;
}

console.log(solution(1));
