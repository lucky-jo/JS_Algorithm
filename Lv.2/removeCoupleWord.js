function solution(_s) {
    if(_s.length ===1 ) return 0

    let arrS = _s.split('');

    let stack = [];

    for( let i = 0; i < arrS.length; i++ ) {
        stack.push(arrS[i])
        removeStack(stack);
    }
    
    return stack.length === 0 ? 1 : 0

}

function removeStack( arr ) {
    if ( arr.length > 1  && arr[arr.length - 1] === arr[arr.length-2] ) {
        arr.splice(arr.length-2)
        removeStack(arr);
    }
}
