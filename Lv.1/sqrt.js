function solution(n) {
    return Math.sqrt(n) % 1 === 0.0 ? Math.pow((Math.sqrt(n)+1),2) : -1
}

console.log(Math.sqrt(4))