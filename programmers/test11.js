// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = []
// arr.forEach((r,i) => {
//     result.push(String(r))
// });
//
// console.log(result);
// const func = (r) => String(r)
//
// console.log(result)

// for (const resultElement of result) {
//
// }
//
// const result1 =  arr.find( r => r > 3)
//
// console.log(result1)

const arr = Array.from({length:4}, (_, i)=> i)


// arr.push(4)
// console.log(arr)

const costumPush = (number) => {
    let expendArr = Array.from({ length: arr.length*2})
    expendArr = [...arr, number]
    return expendArr
}

console.log(costumPush(4))