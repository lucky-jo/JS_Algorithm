function solution(n) {
    const arr = Array.from({ length: n }, (v, i) => i + 1)
    let ch = Array.from({ length: n + 1 }, (v, i) => 0)
    console.log(ch)

    function DFS(v = 1) {
        if (v >= n + 1) {
            let tmp = ''
            for (let i = 0; i < n; i++) {
                if (ch[i] === 1) tmp += arr[i] + ' '
            }
            if (tmp.length > 0) console.log(tmp.trim())
        } else {
            ch[v - 1] = 1
            DFS(v + 1)
            ch[v - 1] = 0
            DFS(v + 1)
        }
    }

    DFS()

    return true;
}

console.log(solution(3));
// function DFS(v = 1,str = '') {
//     if( v > 3) return
//     else {
//         let newStr = str + v + ' '
//         DFS(v+1,newStr)
//         DFS(v+1,str)
//         console.log(str)
//     }
// }

