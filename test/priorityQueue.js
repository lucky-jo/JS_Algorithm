// 우선순위 큐
// 넣은 순서에 상관없이, 우선 순위를 기준으로 값을 가져온다.

// 배열 생성

function priorityQueue(_arr) {
    const arr = _arr

    const result = arr.reduce((acc,cur,idx) => {
        if( idx === 0 ) {
            return cur[0]
        } else {
            return Math.min(acc,cur[0])
        }
    } ,0)

    const idx = arr.findIndex( v => v[0] === result)

    return arr.splice(idx,1)
}

const arr = [[5,"middle"],[10,"high"],[1,"low"]]
console.log(priorityQueue(arr))
console.log(priorityQueue(arr))
console.log(priorityQueue(arr))