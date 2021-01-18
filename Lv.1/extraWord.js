function solution(s) {
    let words = s.split(" ");
    let result = [];
    for( let i = 0; i < words.length; i++ ) {
        let temp = words[i].split('');
        let coppyTemp = ''
        for( let j = 0; j < temp.length; j++ ) {
            if( j % 2 === 0 ) {
                coppyTemp += temp[j].toUpperCase();
            } else {
                coppyTemp += temp[j].toLowerCase();
            }
        }
        result.push(coppyTemp);
    }
    return result.join(" ");
}