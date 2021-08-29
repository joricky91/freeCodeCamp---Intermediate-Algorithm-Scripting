function uniteUnique(arr1, arr2, arr3) {
  let finalArr = [];
  
  for (let i = 0; i < arguments.length; i++){
    let argArr = arguments[i];

    for (let j = 0; j < argArr.length; j++){
      let indexItem = argArr[j];

      if (finalArr.indexOf(indexItem) < 0){
        finalArr.push(indexItem);
      }
    }
  }
  return finalArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))