var findMedianSortedArrays = function (nums1, nums2) {
  // median for both arrays are named m1 and m2
  let nums1length = Math.round(nums1.length / 2);
  let nums2length = Math.round(nums2.length / 2);
  let m1 = nums1length - 1;
  let m2 = nums2length - 1;
  //   finding the smallest array among the given two arrays
  // and solving with log m where m is the length of that smallest array
  let length = Math.min(nums1length, nums2length);

  let check = true;
  while (check) {
    if (nums1[m1] > nums2[m2]) {
      if (nums1[m1] > nums2[m2 + 1]) {
        if (length > 0) {
          length = Math.round(length / 2);
        } else {
          check = false;
        }

        m1 = m1 - length;
        m2 = m2 + length;
        if (!nums2[m2]) {
          m2 = m2 - 1;
          m1 = m1 + 1;
        }
      } else {
        check = false;
      }
    } else {
      if (nums2[m2] > nums1[m1 + 1]) {
        if (length > 0) {
          length = Math.round(length / 2);
        } else {
          check = false;
        }

        m2 = m2 - length;
        m1 = m1 + length;
        if (!nums1[m1]) {
          m1 = m1 - 1;
          m2 = m2 + 1;
        }
      } else {
        check = false;
      }
    }
  }
  let length1 = nums1.length % 2;
  let length2 = nums2.length % 2;
  let max;
  let min;
  // once the m1 and m2 are found , find median for 3 different cases,
  // 1. length of both given arrays are odd
  // 2. length of  both given arrays are even
  // 3.  length of one array is odd and other is even

  // 1. length of both given arrays are odd
  if (length1 === 1 && length2 === 1) {
    if (nums1[m1] && nums2[m2]) {
      if (nums1[m1] > nums2[m2]) {
        max = nums1[m1];
        min = Math.max(
          isNaN(nums1[m1 - 1]) ? -Infinity : nums1[m1 - 1],
          nums2[m2]
        );
      } else {
        max = nums2[m2];
        min = Math.max(
          nums1[m1],
          isNaN(nums2[m2 - 1]) ? -Infinity : nums2[m2 - 1]
        );
      }
      return (max + min) / 2;
    } else {
      if (nums1[m1]) {
        return (nums1[m1] + nums1[m1 - 1]) / 2;
      } else {
        return (nums2[m2] + nums2[m2 - 1]) / 2;
      }
    }
  }
  // 2. length of  both given arrays are even
  else if (length1 === 0 && length2 === 0) {
    if (nums1[m1] && nums2[m2]) {
      if (nums1[m1] > nums2[m2]) {
        min = nums1[m1];
        max = Math.min(
          isNaN(nums1[m1 + 1]) ? +Infinity : nums1[m1 + 1],
          isNaN(nums2[m2 + 1]) ? +Infinity : nums2[m2 + 1]
        );
      } else {
        min = nums2[m2];
        max = Math.min(
          isNaN(nums1[m1 + 1]) ? +Infinity : nums1[m1 + 1],
          isNaN(nums2[m2 + 1]) ? +Infinity : nums2[m2 + 1]
        );
      }
      return (max + min) / 2;
    } else {
      if (nums1[m1]) {
        min = nums1[m1];
        max = Math.min(
          isNaN(nums1[m1 + 1]) ? +Infinity : nums1[m1 + 1],
          isNaN(nums2[m2 + 1]) ? +Infinity : nums2[m2 + 1]
        );
      } else {
        min = nums2[m2];
        max = Math.min(
          isNaN(nums1[m1 + 1]) ? +Infinity : nums1[m1 + 1],
          isNaN(nums2[m2 + 1]) ? +Infinity : nums2[m2 + 1]
        );
      }
      return (max + min) / 2;
    }
  }

  // 3.  length of one array is odd and other is even
  else {
    return Math.max(
      isNaN(nums1[m1]) ? -Infinity : nums1[m1],
      isNaN(nums2[m2]) ? -Infinity : nums2[m2]
    );
  }
};

console.log(
  findMedianSortedArrays(
    [1, 4, 5, 12, 16, 19, 21, 25, 27],
    [93, 101, 181, 283, 344, 411, 432, 489, 511, 554, 556]
  )
);
