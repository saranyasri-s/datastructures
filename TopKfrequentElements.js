// given is an array of numbers,need to return k most frequently occuring elements in an array
// example
// arr=[1,1,1,1,1,2,2,43,43,43,43,43,43,43]
// k=2
// so 2 most frequently occuring elements is 43 and 1
// answer [43,1]

function TopKfrequentElements(arr, k) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  let resultArr = [];
  console.log(obj);

  //   finding the k most frequently occuring element in the given array using recursion
  function helper(object) {
    let max = -Infinity;
    let keyName;
    for (let key in object) {
      if (object[key] > max) {
        max = object[key];
        keyName = key;
      }
    }
    object[keyName] = 0;
    resultArr.push(keyName);
    k = k - 1;
    if (k > 0) {
      helper(object);
    }
  }
  helper(obj);
  return resultArr;
}

console.log(
  TopKfrequentElements([111, 22, 32, 1, 2, 32, 111, 22, 32, 32, 32, 1], 3)
);

// time complexity
// Big0 = n+k(n)s
//  so n is the time complexity
