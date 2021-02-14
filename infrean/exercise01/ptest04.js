function solution(numbers, target) {
    const n = numbers.length

    var answer = 0;


    function dfs(v = 0, sum = 0) {
        if (v === n) {
            if (sum === target) answer++
            return
        } else {
            dfs(v + 1, sum + numbers[v])
            dfs(v + 1, sum - numbers[v])
        }
    }
    dfs();

    return answer;
}

const target = 3;
const numbers = [1, 1, 1, 1, 1]

console.log(solution(numbers, target))