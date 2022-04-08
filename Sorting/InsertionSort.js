function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let correctIndex = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        correctIndex = j;
      } else {
        break;
      }
    }
    if (correctIndex !== i) {
      let insertNum = arr.splice(i, 1);
      if (correctIndex === 0) {
        arr.unshift(insertNum[0]);
      } else {
        arr.splice(correctIndex, 0, insertNum[0]);
      }
    }
  }
  return arr;
}
console.log(InsertionSort([5, 55, 3, 95, 43, 21, 1]));
