function solution(array, commands) {

    let result = [];

    for( let i = 0; i < commands.length; i++ ) {
        let tempI = commands[i][0];
        let tempJ = commands[i][1];
        let tempK = commands[i][2];
        const result1 = array.slice(tempI-1, tempJ).sort((a, b)=> a-b).slice(tempK-1, tempK)
        result.push(result1)
    }
    return result.flat();
}

const array = [1, 5, 2, 6, 3, 7, 4]
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]	

solution(array, commands)