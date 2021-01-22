function solution(_s) {
    return _s.split(' ').map( v=> {
        if(isNaN(v.charAt(0))) {
            return v.charAt(0).toUpperCase()+v.substr(1).toLowerCase()
        } else {
            return v
        }
    }).join(" ")
}

console.log(solution("3people unFollowed me"))