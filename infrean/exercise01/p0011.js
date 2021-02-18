function solution(array, commands) {
    let answer = [];

    for (const x of commands) {
        const result = array.slice(x[0] - 1, x[1] - 1).sort((a, b) => a - b)[0]
        answer.push(result)
    }

    return answer

}

let array = [1, 5, 2, 6, 3, 7, 4]
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]