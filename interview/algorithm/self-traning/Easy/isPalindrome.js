function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
  let headReverse = reverse(head);
  if (JSON.stringify(head) === JSON.stringify(headReverse)) {
    return true;
  }

  return false;
};

function reverse(head) {
  let current = JSON.parse(JSON.stringify(head));
  let previous = null;
  while (current !== null) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}

// const head = new ListNode(1, 2);
// head.next = new ListNode(2, 3);
// head.next.next = new ListNode(3, 4);
// head.next.next.next = new ListNode(4, 5);
// head.next.next.next.next = new ListNode(5, null);

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(23);
head.next.next.next = new Node(22);
head.next.next.next.next = new Node(1);

function method1(head) {
  let stack = [];
  let isRight = false;

  let slow = head;
  while (slow !== null) {
    stack.push(slow.val);
    slow = slow.next;
  }

  while (head !== null) {
    const val = stack.pop();
    if (val == head.val) {
      isRight = true;
    } else {
      isRight = false;
      break;
    }

    head = head.next;
  }

  return isRight;
}

console.log('method1: ', method1(head));
