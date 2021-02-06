function solution(s) {
    return s.length % 2 === 0 ? s.substring(Math.ceil(s.length / 2 - 1), Math.ceil(s.length / 2 + 1)) : s.substring(s.length / 2, s.length / 2 + 1);
}
console.log(solution("study"));