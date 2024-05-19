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

