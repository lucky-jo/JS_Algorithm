function solution(n) {
    let tempArr = [];
    String(n).split('').forEach( value => {
        tempArr.unshift(parseInt(value));
    })
    
    return tempArr;
}

