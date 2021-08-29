function pairElement(str) {
  let pair = [];

  var search = function(char){
    switch(char){
      case "A":
        pair.push(["A", "T"]);
        break;
      case "T":
        pair.push(["T", "A"]);
        break;
      case "C":
        pair.push(["C", "G"]);
        break;
      case "G":
        pair.push(["G", "C"]);
        break;
    }
  };

  for (let i = 0; i < str.length; i++){
    search(str[i]);
  }
  return pair;
}

console.log(pairElement("GCG"))