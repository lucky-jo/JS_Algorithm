function solution(s) {
    
    return s.split('').sort().reverse().join('');
}

const s = 'ZbcdCefg'

console.log( solution(s))