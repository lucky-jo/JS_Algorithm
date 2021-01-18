function solution(phone_number) {
    let tempNumber = phone_number.split('');
    const result = tempNumber.map((number ,index) => {
        if ( index < phone_number.length-4 ) {
            return `*`
        } else {
            return number
        }
    } )
    return result.join('');
}

const phone_number = '01033334444'

const results = solution(phone_number);
console.log(results);