function solution(d, budget) {
    let array = d;
    array.sort((a, b) => a - b);
    let _budget = budget
    let count = 0;
    
    for (let i = 0; i < array.length; i++) {
        if( _budget - array[i] >= 0 ) {
            _budget -= array[i];
            count++;
        } else {
            return count;
        }
        
    }

    return count;
  }
  
  const d = [1,3,2,5,4]
  const budget = 9
  
//   const d = [2,2,3,3]
//   const budget = 10
  
  const results = solution(d, budget);
  console.log(results)