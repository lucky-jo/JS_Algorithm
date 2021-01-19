function solution(s) {
    const strLength = s.length;

    if( strLength % 2 === 0) {
        return s.slice((strLength / 2)-1 ,(strLength / 2)+1)
    } else {
        return s.slice( strLength / 2,(strLength / 2)+1)
    }

}

