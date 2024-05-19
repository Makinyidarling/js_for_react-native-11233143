function processArray(arr) {
  let i = 0;
  let newArray = [];
 
  while (i < arr.length) {
    if (arr[i] % 2 == 0) {
      let sq = arr[i] ** 2;
      newArray.push(sq);
    } else {
      let triple = arr[i] * 3;
      newArray.push(triple);
    }
    i++;
  }

  return newArray;
}
function formateArray(newArr, proSArr) {
  let stringArray = [];
  let length = Math.min(newArr.length, proSArr.length); 

  for (let j = 0; j < length; j++) {
    if (newArr[j] % 2 !== 0) {
      stringArray.push(proSArr[j].toLowerCase());
    } else {
      stringArray.push(proSArr[j].toUpperCase());
    }
  }

  return stringArray;
}

module.exports = { processArray, formateArray };
