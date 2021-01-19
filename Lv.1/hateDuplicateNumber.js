function solution(arr)
{
    let preVal = -1
    const result = arr.filter( value => {
        if( preVal === value ) {
            return false
        } else {
            preVal = value
            return true
        }
    } )

    return result

}

const arr =[1,1,3,3,0,1,1]

let result = solution(arr);
console.log( "result",result);