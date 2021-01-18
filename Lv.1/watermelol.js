function solution(n) {
    let word = '';
    for( let i = 0; i < n; i++ ) {
        if( i % 2 == 0 ) {
            word += `수`
        } else {
            word += `박`
        }
    }
    
    return word
}