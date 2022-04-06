// provided is an array of unique numbers(arr), and sum of any two numbers
// would give the target number(target),we have to return the index of
// those two numbers in a separate array
function sumTwoNumForTarget(arr, target) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 1;
  }

  let indexNum1;
  let num2;
  for (let i = 0; i < arr.length; i++) {
    let checkNumber = target - arr[i];
    if (obj[checkNumber]) {
      num2 = checkNumber;
      indexNum1 = i;
      break;
    }
  }
  let indexNum2 = arr.indexOf(num2);
  return [indexNum1, indexNum2];
}
console.log(sumTwoNumForTarget([4, 1, 77, 11, 3], 88));
