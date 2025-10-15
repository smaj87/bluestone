import { isBlock } from './Category';
import { SHOW_ELEMENT, TreeIterator } from './TreeIterator';

// ---

const getBlockWalker = (
  node: Node,
  root: Element | DocumentFragment,
): TreeIterator<HTMLElement> => {
  const walker = new TreeIterator<HTMLElement>(root, SHOW_ELEMENT, isBlock);
  walker.currentNode = node;
  return walker;
};

const getPreviousBlock = (
  node: Node,
  root: Element | DocumentFragment,
): HTMLElement | null => {
  const block = getBlockWalker(node, root).previousNode();
  return block !== root ? block : null;
};

const getNextBlock = (
  node: Node,
  root: Element | DocumentFragment,
): HTMLElement | null => {
  const block = getBlockWalker(node, root).nextNode();
  return block !== root ? block : null;
};

const isEmptyBlock = (block: Element): boolean =>
  !block.textContent && !block.querySelector('IMG');

// ---

export { getBlockWalker, getNextBlock, getPreviousBlock, isEmptyBlock };
