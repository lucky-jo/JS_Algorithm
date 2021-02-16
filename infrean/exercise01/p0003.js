// 위장

function solution(clothes) {
    let map1 = new Map();
    for (let i = 0; i < clothes.length; i++) {
        map1.set(clothes[i][1], (map1.get(clothes[i][1]) || 0) + 1)
    }
    const results = Array.from(map1)

    answer = results.reduce((acc, cur) => acc * (cur[1] + 1), 1)

    return answer - 1
}

let clothes = [['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']]

console.log(solution(clothes))