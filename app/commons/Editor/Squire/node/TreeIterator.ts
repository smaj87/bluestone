type NODE_TYPE = 1 | 4 | 5;
const SHOW_ELEMENT = 1; // NodeFilter.SHOW_ELEMENT;
const SHOW_TEXT = 4; // NodeFilter.SHOW_TEXT;
const SHOW_ELEMENT_OR_TEXT = 5; // SHOW_ELEMENT|SHOW_TEXT;

const always = (): true => true;

class TreeIterator<T extends Node> {
  root: Node;

  currentNode: Node;

  nodeType: NODE_TYPE;

  filter: (n: T) => boolean;

  constructor(root: Node, nodeType: NODE_TYPE, filter?: (n: T) => boolean) {
    this.root = root;
    this.currentNode = root;
    this.nodeType = nodeType;
    this.filter = filter || always;
  }

  isAcceptableNode(node: Node): boolean {
    const { nodeType } = node;
    let nodeFilterType = SHOW_ELEMENT;

    if (nodeType !== Node.ELEMENT_NODE) {
      nodeFilterType = nodeType === Node.TEXT_NODE ? SHOW_TEXT : 0;
    }

    // eslint-disable-next-line no-bitwise
    return !!(nodeFilterType & this.nodeType) && this.filter(node as T);
  }

  nextNode(): T | null {
    const { root } = this;
    let current: Node | null = this.currentNode;
    let node: Node | null;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      node = current.firstChild;

      while (!node && current) {
        if (current === root) {
          break;
        }

        node = current.nextSibling;

        if (!node) {
          current = current.parentNode;
        }
      }

      if (!node) {
        return null;
      }

      if (this.isAcceptableNode(node)) {
        this.currentNode = node;
        return node as T;
      }

      current = node;
    }
  }

  previousNode(): T | null {
    const { root } = this;
    let current: Node | null = this.currentNode;
    let node: Node | null;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (current === root) {
        return null;
      }

      node = current.previousSibling;

      if (node) {
        // eslint-disable-next-line no-cond-assign
        while ((current = node.lastChild)) {
          node = current;
        }
      } else {
        node = current.parentNode;
      }

      if (!node) {
        return null;
      }

      if (this.isAcceptableNode(node)) {
        this.currentNode = node;
        return node as T;
      }

      current = node;
    }
  }

  // Previous node in post-order.
  previousPONode(): T | null {
    const { root } = this;
    let current: Node | null = this.currentNode;
    let node: Node | null;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      node = current.lastChild;

      while (!node && current) {
        if (current === root) {
          break;
        }

        node = current.previousSibling;

        if (!node) {
          current = current.parentNode;
        }
      }

      if (!node) {
        return null;
      }

      if (this.isAcceptableNode(node)) {
        this.currentNode = node;
        return node as T;
      }

      current = node;
    }
  }
}

// ---

export { SHOW_ELEMENT, SHOW_ELEMENT_OR_TEXT, SHOW_TEXT, TreeIterator };
