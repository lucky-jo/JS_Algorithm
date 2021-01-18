function solution(x, n) {
    let answer = [];
    let tempArrayValue = x;
    const repeat = n;

    for (let i = 0; i < repeat; i++) {
        answer.push(x*(i+1));
    }
    return answer;
}

const x = 2
const n = 5

const results = solution(x, n);
console.log(results);