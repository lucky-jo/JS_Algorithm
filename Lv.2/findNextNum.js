function solution(_n) {

    let dec = _n
    let bin = dec.toString(2).split('')
    const oneLength = bin.filter(v => v === '1').length

    let nowNum = dec+1
    while(true) {
        if(oneLength === findOne(nowNum)) {
            break;
        } else {
            nowNum++;
        }
    }

    return nowNum;
}

function findOne( nextNum ) {
    let nextBin = nextNum.toString(2).split('')
    return nextBin.filter(v => v === '1').length
}


console.log(solution(78))