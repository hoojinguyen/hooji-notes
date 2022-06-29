//   Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  const data = [];

  const traverse = (root) => {
    if (root.left) traverse(root.left);
    data.push(root.val);
    if (root.right) traverse(root.right);
  };

  if (root !== null) traverse(root);

  return data;
};

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
// const root = [1, null, 2, 3];
console.log('🚀 ~ root', root);

const res = inorderTraversal(root);
console.log('🚀 ~ res', res);
