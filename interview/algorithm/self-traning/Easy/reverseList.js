// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// function Node(val) {
//   this.val = val;
//   this.next = null;
// }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = function (head) {
  let previous = null;
  let current = JSON.parse(JSON.stringify(head));
  while (current !== null) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};

// const head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

const reverse = reverseList(head);

console.log('Current: ', JSON.stringify(head));
console.log('Reverse: ', JSON.stringify(reverse));
// ===================================================================

const reverseArray = function (arr) {
  let i = 0;
  let arrNew = [];
  for (let j = arr.length - 1; j >= 0; j--) {
    arrNew[i] = arr[j];
    i++;
  }
  return arrNew;
};

// console.log('reverse: ', reverseArray([1, 2, 3, 4, 5]));
