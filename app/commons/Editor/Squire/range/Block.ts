import { notWS } from '../Constants';
import { getNextBlock, getPreviousBlock } from '../node/Block';
import { isBlock, isInline } from '../node/Category';
import { getNodeAfterOffset, getNodeBeforeOffset } from '../node/Node';
import { SHOW_ELEMENT_OR_TEXT, TreeIterator } from '../node/TreeIterator';
import { isNodeContainedInRange } from './Boundaries';

// ---

// Returns the first block at least partially contained by the range,
// or null if no block is contained by the range.
const getStartBlockOfRange = (
  range: Range,
  root: Element | DocumentFragment,
): HTMLElement | null => {
  const container = range.startContainer;
  let block: HTMLElement | null;

  // If inline, get the containing block.
  if (isInline(container)) {
    block = getPreviousBlock(container, root);
  } else if (
    container !== root &&
    container instanceof HTMLElement &&
    isBlock(container)
  ) {
    block = container;
  } else {
    const node = getNodeBeforeOffset(container, range.startOffset);
    block = getNextBlock(node, root);
  }
  // Check the block actually intersects the range
  return block && isNodeContainedInRange(range, block, true) ? block : null;
};

// Returns the last block at least partially contained by the range,
// or null if no block is contained by the range.
const getEndBlockOfRange = (
  range: Range,
  root: Element | DocumentFragment,
): HTMLElement | null => {
  const container = range.endContainer;
  let block: HTMLElement | null;

  // If inline, get the containing block.
  if (isInline(container)) {
    block = getPreviousBlock(container, root);
  } else if (
    container !== root &&
    container instanceof HTMLElement &&
    isBlock(container)
  ) {
    block = container;
  } else {
    let node = getNodeAfterOffset(container, range.endOffset);

    if (!node || !root.contains(node)) {
      node = root;
      let child: Node | null;

      // eslint-disable-next-line no-cond-assign
      while ((child = node.lastChild)) {
        node = child;
      }
    }

    block = getPreviousBlock(node, root);
  }

  // Check the block actually intersects the range
  return block && isNodeContainedInRange(range, block, true) ? block : null;
};

const isContent = (node: Element | Text): boolean =>
  node instanceof Text ? notWS.test(node.data) : node.nodeName === 'IMG';

const rangeDoesStartAtBlockBoundary = (
  range: Range,
  root: Element,
): boolean => {
  const { startContainer } = range;
  const { startOffset } = range;
  let nodeAfterCursor: Node | null;

  // If in the middle or end of a text node, we're not at the boundary.
  if (startContainer instanceof Text) {
    if (startOffset) {
      return false;
    }
    nodeAfterCursor = startContainer;
  } else {
    nodeAfterCursor = getNodeAfterOffset(startContainer, startOffset);
    if (nodeAfterCursor && !root.contains(nodeAfterCursor)) {
      nodeAfterCursor = null;
    }
    // The cursor was right at the end of the document
    if (!nodeAfterCursor) {
      nodeAfterCursor = getNodeBeforeOffset(startContainer, startOffset);
      if (nodeAfterCursor instanceof Text && nodeAfterCursor.length) {
        return false;
      }
    }
  }

  // Otherwise, look for any previous content in the same block.
  const block = getStartBlockOfRange(range, root);
  if (!block) {
    return false;
  }
  const contentWalker = new TreeIterator<Element | Text>(
    block,
    SHOW_ELEMENT_OR_TEXT,
    isContent,
  );
  contentWalker.currentNode = nodeAfterCursor;

  return !contentWalker.previousNode();
};

const rangeDoesEndAtBlockBoundary = (range: Range, root: Element): boolean => {
  const { endContainer } = range;
  const { endOffset } = range;
  let currentNode: Node;

  // If in a text node with content, and not at the end, we're not
  // at the boundary
  if (endContainer instanceof Text) {
    const { length } = endContainer.data;
    if (length && endOffset < length) {
      return false;
    }
    currentNode = endContainer;
  } else {
    currentNode = getNodeBeforeOffset(endContainer, endOffset);
  }

  // Otherwise, look for any further content in the same block.
  const block = getEndBlockOfRange(range, root);
  if (!block) {
    return false;
  }
  const contentWalker = new TreeIterator<Element | Text>(
    block,
    SHOW_ELEMENT_OR_TEXT,
    isContent,
  );
  contentWalker.currentNode = currentNode;
  return !contentWalker.nextNode();
};

const expandRangeToBlockBoundaries = (range: Range, root: Element): void => {
  const start = getStartBlockOfRange(range, root);
  const end = getEndBlockOfRange(range, root);
  let parent: Node;

  if (start && end) {
    parent = start.parentNode!;
    range.setStart(parent, Array.from(parent.childNodes).indexOf(start));
    parent = end.parentNode!;
    range.setEnd(parent, Array.from(parent.childNodes).indexOf(end) + 1);
  }
};

// ---

export {
  expandRangeToBlockBoundaries,
  getEndBlockOfRange,
  getStartBlockOfRange,
  rangeDoesEndAtBlockBoundary,
  rangeDoesStartAtBlockBoundary,
};
