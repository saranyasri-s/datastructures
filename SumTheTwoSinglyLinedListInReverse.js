// two singly linked list is given ,but in reverse order, have to sum up the numbers and return a new linked list in the reverse order
// example,   123+356=479,   3->2->1, 6->5->3  ,, need to return 9->7->4

// creating singly linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  add(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
      this.length++;
    }
    return this;
  }
}

// code for extracting number from the 2 input list and to sum up and to return the new list

function sumtwoList(list1, list2) {
  // this function is to change the provided list to number
  function changeListToNumber(list) {
    let numStr = "";
    let current = list.head;
    while (current) {
      numStr = current.val.toString() + numStr;
      current = current.next;
    }
    let num = +numStr;
    return num;
  }

  let num1 = changeListToNumber(list1);
  let num2 = changeListToNumber(list2);

  //   sum the 2 number
  let sum = num1 + num2;

  //   convert the sum to string
  let sumStr = sum.toString();

  //   reverse the  sum string
  let sumStrReverse = sumStr.split("").reverse().join("");

  let newList = new SLL();

  //   convert the reversed sum string to the output list
  function strToLIst(str) {
    for (let letter of str) {
      let letterNum = +letter;
      newList.add(letterNum);
    }
  }
  strToLIst(sumStrReverse);

  return newList;
}

// input strings 123 +456 =579
let list1 = new SLL();
list1.add(3);
list1.add(2);
list1.add(1);
// 3->2->1

let list2 = new SLL();
list2.add(6);
list2.add(5);
list2.add(4);
// 6->5->4

console.log(sumtwoList(list1, list2));
