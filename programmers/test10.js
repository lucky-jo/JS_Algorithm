function solution(n) {
    let sum = 0
    const three = n.toString(3)
    for (let i = 0; i <three.length ; i++) {
        sum += Number(three[i])*Math.pow(3,i)
    }

    return sum;
}

console.log(solution(125))
