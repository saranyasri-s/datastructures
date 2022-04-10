function getNumber(num, place) {
  let numberStr = num.toString();
  let numberLength = 0;
  for (let letter of numberStr) {
    numberLength++;
  }
  if (place >= numberLength) {
    return 0;
  }
  let division = 1;
  for (let i = 0; i <= place; i++) {
    division = division * 10;
  }
  let result = "";
  let number = num % division;
  number = number.toString();
  for (let letter of number) {
    result = result + letter;
    break;
  }

  return +result;
}

function getDigit(num) {
  let numberStr;
  if (num) {
    numberStr = num.toString();
  } else {
    return 0;
  }

  let numberLength = 0;
  for (let letter of numberStr) {
    numberLength++;
  }
  return numberLength;
}

function mostDigits(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let digit = getDigit(arr[i]);
    if (digit > max) {
      max = digit;
    }
  }
  return max;
}

function radixSort(arr) {
  let maxDigit = mostDigits(arr);
  let arr2 = [];
  function helper(arr, digit) {
    let arr1 = [[], [], [], [], [], [], [], [], [], []];
    for (let j = 0; j < arr.length; j++) {
      let num = getNumber(arr[j], digit);
      arr1[num].push(arr[j]);
    }
    arr2 = [];
    for (let k = 0; k < arr1.length; k++) {
      if (arr1[k].length) {
        for (let m = 0; m < arr1[k].length; m++) {
          arr2.push(arr1[k][m]);
        }
      }
    }
    digit = digit + 1;
    if (digit < maxDigit) {
      return helper(arr2, digit);
    } else {
      return;
    }
  }
  helper(arr, 0);
  return arr2;
}
console.log(radixSort([243, 4243, 242, 25353, 42424, 2, 25, 7, 1, 28]));
