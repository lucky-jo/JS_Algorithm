function solution(s) {
    const result = s.split('').filter( value => isNaN(value) )
    console.log(result)
    if( s.length ==4 || s.length == 6) {
        if (result.length !== 0)  {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
    
}

// number string

console.log(solution('123401.1'))

// console.log( isNaN('a') )