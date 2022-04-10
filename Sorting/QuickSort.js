function pivotHelper(arr, start = 0, end = arr.length - 1) {
  let newPivot = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] <= arr[start]) {
      newPivot++;
      if (newPivot !== i) {
        [arr[i], arr[newPivot]] = [arr[newPivot], arr[i]];
      }
    }
  }
  [arr[newPivot], arr[start]] = [arr[start], arr[newPivot]];

  return newPivot;
}
console.log(quickSort([25, 15, 50, 10, 2, 88, 75, 6]));

function quickSort(arr, start = 0, end = arr.length - 1) {
  let left = start;
  let right = end;
  if (end - start < 1) {
    return;
  }
  let pivot = pivotHelper(arr, start, end);
  let leftArr = quickSort(arr, left, pivot - 1);
  let rightArr = quickSort(arr, pivot + 1, end);
  return arr;
}
