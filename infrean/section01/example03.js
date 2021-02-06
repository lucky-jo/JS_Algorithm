function solution(n) {

    // return n % 12 === 0 ? n / 12 : Math.floor(n / 12) + 1;
    return Math.ceil(n / 12)
}

console.log(solution(178));