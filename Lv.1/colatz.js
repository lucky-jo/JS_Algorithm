function solution(num) {
    let count = 0;

    while( num !== 1 ) {
        if ( count === 500) {
            return -1
        }
        if( num % 2 === 0 ) {
            num /= 2;
        } else {
            num *= 3;
            num += 1;
        }
        count++;
    }
    return count;
}

const n = 16;

const result = solution(n);

console.log(result);