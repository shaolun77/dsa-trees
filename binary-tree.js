/** BinaryTreeNode: node for a general tree. */
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Helper function to calculate depth recursively
  _depth(node, isMin) {
    if (!node) return 0;

    let leftDepth = this._depth(node.left, isMin);
    let rightDepth = this._depth(node.right, isMin);

    if (isMin) {
      if (node.left == null || node.right == null) {
        return 1 + Math.max(leftDepth, rightDepth);
      }
      return 1 + Math.min(leftDepth, rightDepth);
    }
    return 1 + Math.max(leftDepth, rightDepth);
  }

  minDepth() {
    return this._depth(this.root, true);
  }

  maxDepth() {
    return this._depth(this.root, false);
  }

  maxSum() {
    let result = -Infinity;

    const _maxPathSum = (node) => {
      if (!node) return 0;

      const left = Math.max(_maxPathSum(node.left), 0);
      const right = Math.max(_maxPathSum(node.right), 0);
      result = Math.max(result, node.val + left + right);

      return node.val + Math.max(left, right);
    }

    _maxPathSum(this.root);
    return result;
  }

  nextLarger(lowerBound) {
    let result = null;

    const _traverse = (node) => {
      if (!node) return;

      if (node.val > lowerBound) {
        if (result == null) result = node.val;
        else result = Math.min(result, node.val);
      }

      _traverse(node.left);
      _traverse(node.right);
    }

    _traverse(this.root);
    return result;
  }

  // ... Other methods can be added here
}

module.exports = { BinaryTree, BinaryTreeNode };
