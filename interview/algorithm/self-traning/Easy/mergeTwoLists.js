/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

class ListNode {
  val;
  next;
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeTwoLists = (list1, list2) => {
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  let [current, l1, l2] = [null, null, null];

  // SINCE WE WANT THE LIST TO BE SORTED THE SMALLER OF THE GIVEN TWO POINTERS SHOULD BE THE START
  if (list1.val <= list2.val) {
    [current, l1, l2] = [list1, list1.next, list2];
  } else {
    [current, l1, l2] = [list2, list1, list2.next];
  }

  // BELOW IS THE MERGE SORT LOGIC BUT HERE WE JUST HAVE TO CHANGE POINTERS CAREFULLY
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1;
      current = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      current = l2;
      l2 = l2.next;
    }
  }

  while (l1 != null) {
    current.next = l1;
    current = current.next;
    l1 = l1.next;
  }

  while (l2 != null) {
    current.next = l2;
    current = current.next;
    l2 = l2.next;
  }

  return list1.val <= list2.val ? list1 : list2;
};

const toString = (obj) => JSON.stringify(obj);

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergeList = mergeTwoLists(list1, list2);
console.log('Merge List: ', toString(mergeList));

// O(n) - 0(1)
