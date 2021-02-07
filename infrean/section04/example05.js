function solution(n, k, card){
    const set1 = new Set();
    for (let i = 0; i < card.length-2; i++){
        for (let j = i+1; j < arr.length-1; j++) {
            for (let k = j+1; k < arr.length; k++) {
                const sum = card[i]+card[j]+card[k];
                set1.add(sum);
            }
        }
    }
    const answer = Array.from(set1).sort((a,b) => b-a);

    return answer[k-1];
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));