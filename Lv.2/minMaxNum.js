function solution(s) {
    const result = s.split(' ').reduce( (acc,cur) => {
        if( acc.length === 0 ) {
            console.log( acc)
            let min = Number(cur)
            console.log('min',min)
            let max = Number(cur)
            console.log('max',max)
            return [min,max];
        } else {
            // console.log(acc)
            let min = Math.min(acc[0], Number(cur))
            let max = Math.max(acc[1], Number(cur))
            return [min,max];
        }

    },[]);
    return `${result[0]} ${result[1]}`

}

console.log(solution("1 2 3 4"))