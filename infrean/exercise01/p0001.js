// 완주하지 못한 선수

function solution(participant, completion) {
    let results = participant.reduce((acc, cur) => {
        if (!acc[cur]) acc[cur] = 1
        else acc[cur] = acc[cur] + 1
        return acc
    }, {})
    completion.forEach(v => {
        results[v] -= 1
    })

    let answer = Object.entries(results)
    return answer.filter(value => value[1] > 0)[0][0]
}

let participant = ['leo', 'kiki', 'eden']
let completion = ['eden', 'kiki']

console.log(solution(participant, completion))