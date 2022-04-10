// merging two sorted array
function helperMerge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let newArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length - 1) {
    for (let k = i; k < arr1.length; k++) {
      newArr.push(arr1[k]);
    }
  }
  if (j < arr2.length - 1) {
    for (let l = j; l < arr2.length; l++) {
      newArr.push(arr2[l]);
    }
  }
  return newArr;
}
console.log(
  helperMerge(
    [1, 34, 45, 100, 234],
    [2, 3, 23, 37, 46, 78, 500, 600, 789, 890, 900, 2000]
  )
);
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let midIndex = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, midIndex));
  let rightArr = mergeSort(arr.slice(midIndex));
  return helperMerge(leftArr, rightArr);
}
console.log(
  mergeSort([46, 78, 56, 500, 600, 789, 8902, 3, 23, 37, 12, 900, 2000])
);
