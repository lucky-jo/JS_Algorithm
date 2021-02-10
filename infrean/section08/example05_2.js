function solution(arr) {
    let ch = Array.from({ length: arr.length }, (v, i) => 0)
    let answer = false
    const sum = arr.reduce((acc, cur) => acc + cur, 0)
    let flag = false

    function dfs(v = 1, sum) {
        if( flag) return
        if (v >= arr.length + 1) {
            let chSum = 0
            let isThere = []
            let noThere = []
            for (let i = 0; i < ch.length; i++) {
                if (ch[i] === 1) {
                    chSum += arr[i]
                    isThere.push(arr[i])
                } else {
                    noThere.push(arr[i])
                }
            }
            console.log('isThere', isThere)
            console.log('noThere', noThere)
            if (sum - chSum === chSum) {
                console.log('sum - chSum', sum - chSum)
                console.log('chSum', chSum)
                answer = true
                flag = true
            }
            return
        } else {
            ch[v - 1] = 1
            dfs(v + 1, sum)
            ch[v - 1] = 0
            dfs(v + 1, sum)
        }
    }
    dfs(1, sum)

    return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));