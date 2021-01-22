function solution(_people, _limit) {
    let people = _people.sort((a, b)=> a - b);
    let count = 0;
    const limit = _limit
    while(people.length > 0) {  
        let boart = [];
        boart.push(people.pop());
        if( boart[0] + people[0] <= limit ) {
            people.shift();
        }
        count++;
    }
    return count;

}

