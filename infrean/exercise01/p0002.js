// 전화번호 목록

function solution(phone_book) {

    for (let i = 0; i < phone_book.length; i++) {
        for (let j = 0; j < phone_book.length; j++) {
            if (i !== j) {
                if (phone_book[i].startsWith(phone_book[j])) return false;
            }
        }
    }

    return true;

}

// let phone_book = ['119', '97674223', '1195524421']
let phone_book = ['123', '456', '789']


console.log(solution(phone_book))