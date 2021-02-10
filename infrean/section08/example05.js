function solution(arr) {
    let ch = Array.from({ length: arr.length }, (v, i) => 0)
    let sumArr = [];
    let answer = false

    function DFS(v = 1) {
        if (v >= arr.length + 1) {
            let sum = 0;
            for (let i = 0; i < ch.length; i++) {
                if (ch[i] === 1) sum += arr[i]
            }
            const idx = sumArr.indexOf(sum)
            if (idx > -1) {
                answer = true
            }
            else sumArr.push(sum)
            return
        } else {
            ch[v - 1] = 1
            DFS(v + 1)
            ch[v - 1] = 0
            DFS(v + 1)
        }
    }

    DFS();
    sumArr.sort()

    return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));