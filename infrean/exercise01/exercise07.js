function solution(n, arr) {
    const set1 = new Set();
    let answer = 0
    arr.sort((a, b) => a - b)
    let tmpLen = Math.ceil(n / arr[0])+1

    function dfs(v = 0, sum = 0) {
        if (v >= tmpLen) return
        else if (sum > n) return
        else if (sum === n ){
            set1.add(v)
            return
        } else {
            for (let i = 0; i <arr.length; i++) {
                dfs(v+1, sum + arr[i])
            }
        }
    }
    dfs()
    console.log(Array.from(set1))
    return set1.size
}

const n = 10;
const arr = [1, 2, 5]
console.log(solution(10, arr))