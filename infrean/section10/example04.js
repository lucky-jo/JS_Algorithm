function solution(m, coin) {

    let answer = 0
    const dy = Array.from({ length: m + 1 }, () => 10000)
    dy[0] = 0
    for (let i = 0; i < coin.length; i++) {
        for (let j = coin[i]; j <= m; j++) {
            dy[j] = Math.min(dy[j - coin[i]] + 1, dy[j])
        }
    }

    return dy[m];
}

let arr = [1, 2, 5];
console.log(solution(15, arr));