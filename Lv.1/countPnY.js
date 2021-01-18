function solution(s){
    const resultP = s.toLowerCase().split("").filter( value => value === 'p');
    const resultY = s.toLowerCase().split("").filter( value => value === 'y');

    if( !resultP && !resultY ) {
        return true
    } else if( resultP.length === resultY.length ) {
        return true
    } else {
        return false
    }
}