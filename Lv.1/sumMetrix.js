function solution(arr1, arr2) {
    let answer = [];
    const length = arr1.length

    for( let i = 0; i < length; i++ ) {
        let tempArr = []
        for( let j = 0; j < arr1[0].length; j++ ) {
             
            tempArr.push(arr1[i][j]+arr2[i][j])
        }
        answer.push(tempArr)

    }
    
    return answer;
}

const arr1 = [[1,2],[2,3]]

const arr2 = [[3,4],[5,6]]

const result = solution(arr1, arr2);
console.log(result)