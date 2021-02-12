function solution(arr) {
    const set1 = new Set();
    let flag = false;
    let answer = false;
    let n = arr.length;

    let visited = Array.from({ length: n }, (v, i) => i + 1)

    function dfs(v = 0, sum = 0) {
        if(flag) return
        if (v >= n) {
            const preCnt = set1.size
            set1.add(sum)
            if( preCnt !== 0 && preCnt === set1.size ) {
                answer = true
                flag = true
                console.log(sum)
            }
        } else {
            visited[v] = 1
            dfs(v + 1, sum+ arr[v])
            visited[v] = 0
            dfs(v + 1, sum)
        }
    }

    dfs()

    return answer
}
const arr = [1, 3, 5, 6, 7, 10]
console.log(solution(arr))