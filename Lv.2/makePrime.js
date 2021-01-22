function solution(nums) {
    const result = combination(nums).map(v => v.reduce((acc,cur) => acc + cur,0))
    return result.filter(v => isPrime(v)).length;
}


function combination(arr, selectNum = 3) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
      const fixed = v;
      const restArr = arr.slice(idx + 1);
      const combinationArr = combination(restArr, selectNum - 1);
      const combineFix = combinationArr.map((v) => [fixed, ...v]);
      result.push(...combineFix);
    });
    return result;
}

function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    if (n === 2 || n === 3) {
      return true;
    }
    if (n % 2 === 0) {
      return false;
    }
    let divisor = 3;
    let limit = Math.sqrt(n);
    while (limit >= divisor) {
      if (n % divisor === 0) {
        return false;
      }
      divisor += 2;
    }
    return true;
  }
