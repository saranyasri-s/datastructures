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

// solution code
// while iterating over the both the list at the same time,
//  add the values to get sum,  carry=sum%10 and val=sum/10 and
//   call the helper function which accepts the next node from both the list
//   and carry as 3rd factor

// input example

// 5 <- 4 <- 2(245+374=619)
// 4 <- 7 <- 3

// answer
// 9 <- 1 <- 6

function sumtwoList(list1, list2) {
  let newList = new SLL();

  function helper(node1, node2, carry) {
    let sum;
    if (node1 && node2) {
      sum = node1.val + node2.val + carry;
    } else if (!node1 && node2) {
      sum = 0 + node2.val + carry;
    } else if (node1 && !node2) {
      sum = node1.val + 0 + carry;
    } else {
      retrun;
    }

    let answer = sum % 10;
    newList.add(answer);
    let carry2 = sum / 10;
    helper(node1.next, node2.next, carry2);
  }
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

console.log(sumtwoList(list1, list2, 0));
