function solution(a, b, c) {
    let answer;
    if (a > b) answer = b
    else answer = a;
    if (c < answer) answer = c;
    return answer;
}
console.log(solution(2, 5, 1));
