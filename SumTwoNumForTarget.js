// provided is an array of unique numbers(arr), and sum of any two numbers
// would give the target number(target),we have to return the index of
// those two numbers in a separate array
function sumTwoNumForTarget(arr, target) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i;
    let checkNumber = target - arr[i];
    if (obj[checkNumber]) {
      return [i, obj[checkNumber]];
    }
  }
}
console.log(sumTwoNumForTarget([4, 12, 11, 77, 3], 88));
