function whatIsInAName(collection, source) {
  var keySrc = Object.keys(source);
  // Only change code below this line
  return collection.filter(function(obj){
    for (let i = 0; i < keySrc.length; i++){
      if (!obj.hasOwnProperty(keySrc[i]) || obj[keySrc[i]] !== source[keySrc[i]]){
        return false;
      }
    }
    return true;
  });

  // Only change code above this line
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))