function solution(s) {
    let answer = [];
    for (const x of s) {
        if (answer.findIndex(value => value === x ) === -1) answer.push(x);
    }
    return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));