function sumAll(arr) {
  let maxNum = Math.max(arr[0], arr[1]);
  let minNum = Math.min(arr[0], arr[1]);
  let sum = 0;

  for (let i = minNum; i <= maxNum; i++){
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));