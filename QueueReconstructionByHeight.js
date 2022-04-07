function QueueReconstructionByHeight(arr) {
  let helperArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sortIndex = arr[i][1];
    if (helperArr[sortIndex]) {
      for (let j = 0; j < helperArr[sortIndex].length; j++) {
        if (arr[i][0] <= helperArr[sortIndex][j][0]) {
          helperArr[sortIndex].splice(j, 0, arr[i]);
          break;
        }
      }
    } else {
      helperArr[sortIndex] = [arr[i]];
    }
  }
  let resultArr = [];
  for (let i = 0; i < helperArr.length; i++) {
    if (helperArr[i]) {
      for (let j = 0; j < helperArr[i].length; j++) {
        resultArr.push(helperArr[i][j]);
      }
    }
  }

  for (let i = 1; i < resultArr.length; i++) {
    let num = 0;
    let index;
    for (let j = 0; j < i; j++) {
      if (resultArr[j][0] >= resultArr[i][0]) {
        num = num + 1;
        if (num === resultArr[i][1]) {
          index = j;
        }
      }
    }
    if (num > resultArr[i][1]) {
      let arrr = resultArr[i];
      resultArr.splice(i, 1);
      resultArr.splice(index + 1, 0, arrr);
    }
  }

  return resultArr;
}
console.log(
  QueueReconstructionByHeight([
    [4, 5],
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ])
);
