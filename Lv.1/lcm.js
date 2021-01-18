function solution(n, m) {
    
    var answer = []
    const max = n>m?n:m
    let left = 1;
    let right = 1;
    for( let i = 0; i <= max; i++ ) {
        if( n%i == 0 && m % i == 0 ) {
            left = i;
            right = n*m/i;
        }
    }
    answer.push(left)
    answer.push(right)
    return answer;
}