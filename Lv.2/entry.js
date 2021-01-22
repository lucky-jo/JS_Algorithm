function solution(_n,_a,_b) {
    let a = Math.min(_a,_b);
    let b = Math.max(_a,_b);
    
    let count = 1
    while(true) {
        a = a % 2 !== 0 ? a + 1 : a
        b = b % 2 !== 0 ? b + 1 : b
        if( a === b ) {
            break
        } else {
            a /= 2
            b /= 2
        }
        count++;
    }

    return count

}

console.log(solution(8,4,7))