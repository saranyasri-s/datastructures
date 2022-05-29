var threeSum = function(nums) {
  // merge sort function//
function helperMerge(left, right) {
   let arr = [];
  
   while (left.length && right.length) {
     
     if (left[0] < right[0]) {
       arr.push(left.shift());
     } else {
       arr.push(right.shift());
     }
   }
   return [...arr, ...left, ...right];
 }
 function mergeSort(array) {
   const half = array.length / 2;

   // Base case or terminating case
   if (array.length < 2) {
     return array;
   }

   const left = array.splice(0, half);
   return helperMerge(mergeSort(left), mergeSort(array));
 }

   
   //create separate arrays for negative, positive numbers//
 let negArr = [];

 let sortedArr = mergeSort(nums);
 let posArr = [];
   //create an obj to store the elements with it repetition times in the given array//
 let obj = {};
 let resultArr = [];

 for (let i = 0; i < sortedArr.length; i++) {
   if (obj[sortedArr[i]]) {
     obj[sortedArr[i]] = obj[sortedArr[i]] + 1;
   } else {
     obj[sortedArr[i]] = 1;
   }
   if (sortedArr[i] < 0) {
     negArr.push(sortedArr[i]);
   } else if (sortedArr[i] > 0) {
     posArr.push(sortedArr[i]);
   }
 }
   
   //if more than 2 zeros are present in the given array push that triplet to the resultArray//
 if (obj[0] > 2) {
   resultArr.push([0, 0, 0]);
 }
   
   //loop over the positive array and find the 2 negative numbers which helps to form the triplet//
 for (let i = 0; i < negArr.length; i++) {
   if (negArr[i] === negArr[i - 1]) {
   } else {
     let num = negArr[i] * -1;

     if (obj[0]) {
       if (obj[num]) {
         resultArr.push([negArr[i], 0, num]);
       }
     }
     let middle = Math.floor(num / 2);

     let j = 0;
     while (posArr[j] <= middle) {
       let prev = j - 1;
       if (posArr[j] === posArr[prev]) {
         j++;
       } else {
         let bal = negArr[i] + posArr[j];

         bal = bal * -1;
         if (bal === posArr[j]) {
           if (obj[bal] > 1) {
             resultArr.push([negArr[i], posArr[j], bal]);
             obj[bal] = 1;
           }
           j++;
         } else {
           if (obj[bal]) {
             resultArr.push([negArr[i], posArr[j], bal]);
           }
           j++;
         }
       }
     }
   }
 }
  
   //loop over the negative array and find the 2 positive numbers which helps to form the triplet//
 for (let i = 0; i < posArr.length; i++) {
   if (posArr[i] !== posArr[i - 1]) {
     let middle = Math.floor(posArr[i] / 2);

     middle = middle * -1;
     let j = negArr.length - 1;
     while (negArr[j] >= middle) {
       if (negArr[j] === negArr[j + 1]) {
         j--;
       } else {
         let bal = posArr[i] + negArr[j];
         bal = bal * -1;
         if (bal === negArr[j]) {
           if (obj[bal] > 1) {
             resultArr.push([posArr[i], negArr[j], bal]);
             obj[bal] = 1;
           }
           j--;
         } else {
           if (obj[bal]) {
             resultArr.push([posArr[i], negArr[j], bal]);
           }
           j--;
         }
       }
     }
   }
 }
   
 return resultArr;
};
console.log(ThreeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
