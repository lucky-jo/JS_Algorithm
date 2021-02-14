function solution(begin, target, words) {
    let answer = Number.MAX_SAFE_INTEGER;
    let count = 0;
    let check = words.reduce((acc, cur) => {
        acc[cur] = 0
        return acc
    }, {})
    if (words.indexOf(target) === -1) return 0

    function dfs(b, t, w) {
        count++
        if (!w.length) return
        else if (w.indexOf(t) !== -1) {
            if (answer > count) answer = count
            return
        }
        else {
            for (const x of w) {
                if (check[x] === 0) {
                    check[x] = 1
                    dfs(x, t, compare1(x, words))
                    check[x] = 0
                }
            }
        }
    }

    dfs(begin, target, compare1(begin, words))

    return answer;
}

function compare1(target, words) {
    const tv = target.split('')

    const result = words.filter(v => {
        let count = 0
        const fv = v.split('')
        for (let i = 0; i < fv.length; i++) {
            if (count === 2) return false
            if (tv[i] !== fv[i]) count++;
        }
        return count === 1 ? true : false
    })
    return result

}

let begin = 'hit'
let target = 'cog'
let words = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']

console.log(solution(begin, target, words))