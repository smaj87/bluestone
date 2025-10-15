import { cantFocusEmptyTextNodes, SIGN_CLASS, ZWS } from '../Constants';
import { isContainer, isInline } from './Category';
import {
  areAlike,
  createElement,
  detach,
  empty,
  getLength,
  getNearest,
} from './Node';

// ---

const fixCursor = (node: Node): Node => {
  // In Webkit and Gecko, block level elements are collapsed and
  // unfocusable if they have no content. To remedy this, a <BR> must be
  // inserted. In Opera and IE, we just need a textnode in order for the
  // cursor to appear.
  let fixer: Element | Text | null = null;

  if (node instanceof Text) {
    return node;
  }

  if (isInline(node)) {
    let child = node.firstChild;

    if (cantFocusEmptyTextNodes) {
      while (child && child instanceof Text && !child.data) {
        node.removeChild(child);
        child = node.firstChild;
      }
    }

    if (!child) {
      if (cantFocusEmptyTextNodes) {
        fixer = document.createTextNode(ZWS);
      } else {
        fixer = document.createTextNode('');
      }
    }
  } else if (node instanceof Element && !node.querySelector('BR')) {
    fixer = createElement('BR');
    let parent: Element = node;
    let child: Element | null;

    // eslint-disable-next-line no-cond-assign
    while ((child = parent.lastElementChild) && !isInline(child)) {
      parent = child;
    }
  }

  if (fixer) {
    try {
      node.appendChild(fixer);
    } catch {}
  }

  return node;
};

// Recursively examine container nodes and wrap any inline children.
const fixContainer = (
  container: Node,
  root: Element | DocumentFragment,
): Node => {
  let wrapper: HTMLElement | null = null;
  Array.from(container.childNodes).forEach((child) => {
    // nie mozemy fixowac kontenera signa, bo wtedy rozbija go na elementy blokowe ( jak usuniesz to sprawdzenie isChildOfSign to sprobuj usunac poczatek linii w signie)
    const isChildOfSign = root
      .querySelector(`.${SIGN_CLASS}:not(blockquote .${SIGN_CLASS})`)
      ?.contains(container);

    if (isChildOfSign) {
      return;
    }

    const isBR = child.nodeName === 'BR';
    if (!isBR && isInline(child)) {
      if (!wrapper) {
        wrapper = createElement('DIV');
      }
      wrapper.appendChild(child);
    } else if (isBR || wrapper) {
      if (!wrapper) {
        wrapper = createElement('DIV');
      }
      fixCursor(wrapper);
      if (isBR) {
        container.replaceChild(wrapper, child);
      } else {
        container.insertBefore(wrapper, child);
      }
      wrapper = null;
    }
    if (isContainer(child)) {
      fixContainer(child, root);
    }
  });
  if (wrapper) {
    container.appendChild(fixCursor(wrapper));
  }
  return container;
};

const split = (
  node: Node,
  offset: number | Node | null,
  stopNode: Node,
  root: Element | DocumentFragment,
): Node | null => {
  if (node instanceof Text && node !== stopNode) {
    if (typeof offset !== 'number') {
      throw new Error('Offset must be a number to split text node!');
    }
    if (!node.parentNode) {
      throw new Error('Cannot split text node with no parent!');
    }
    return split(node.parentNode, node.splitText(offset), stopNode, root);
  }

  let nodeAfterSplit: Node | null =
    // eslint-disable-next-line no-nested-ternary
    typeof offset === 'number'
      ? offset < node.childNodes.length
        ? node.childNodes[offset]
        : null
      : offset;
  const parent = node.parentNode;
  if (!parent || node === stopNode || !(node instanceof Element)) {
    return nodeAfterSplit;
  }

  // Clone node without children
  const clone = node.cloneNode(false) as Element;

  // Add right-hand siblings to the clone
  while (nodeAfterSplit) {
    const next = nodeAfterSplit.nextSibling;
    clone.appendChild(nodeAfterSplit);
    nodeAfterSplit = next;
  }

  // Maintain li numbering if inside a quote.
  if (
    node instanceof HTMLOListElement &&
    getNearest(node, root, 'BLOCKQUOTE')
  ) {
    (clone as HTMLOListElement).start =
      (+node.start || 1) + node.childNodes.length - 1;
  }

  // DO NOT NORMALISE. This may undo the fixCursor() call
  // of a node lower down the tree!
  // We need something in the element in order for the cursor to appear.
  fixCursor(node);
  fixCursor(clone);

  // Inject clone after original node
  parent.insertBefore(clone, node.nextSibling);

  // Keep on splitting up the tree
  return split(parent, clone, stopNode, root);
};

const _mergeInlines = (
  node: Node,
  fakeRange: {
    startContainer: Node;
    startOffset: number;
    endContainer: Node;
    endOffset: number;
  },
): void => {
  const children = node.childNodes;
  let l = children.length;
  const frags: DocumentFragment[] = [];

  while (l--) {
    const child = children[l];
    const prev = l ? children[l - 1] : null;

    if (prev && isInline(child) && areAlike(child, prev)) {
      if (fakeRange.startContainer === child) {
        // eslint-disable-next-line no-param-reassign
        fakeRange.startContainer = prev;
        // eslint-disable-next-line no-param-reassign
        fakeRange.startOffset += getLength(prev);
      }

      if (fakeRange.endContainer === child) {
        // eslint-disable-next-line no-param-reassign
        fakeRange.endContainer = prev;
        // eslint-disable-next-line no-param-reassign
        fakeRange.endOffset += getLength(prev);
      }

      if (fakeRange.startContainer === node) {
        if (fakeRange.startOffset > l) {
          // eslint-disable-next-line no-param-reassign
          fakeRange.startOffset -= 1;
        } else if (fakeRange.startOffset === l) {
          // eslint-disable-next-line no-param-reassign
          fakeRange.startContainer = prev;
          // eslint-disable-next-line no-param-reassign
          fakeRange.startOffset = getLength(prev);
        }
      }

      if (fakeRange.endContainer === node) {
        if (fakeRange.endOffset > l) {
          // eslint-disable-next-line no-param-reassign
          fakeRange.endOffset -= 1;
        } else if (fakeRange.endOffset === l) {
          // eslint-disable-next-line no-param-reassign
          fakeRange.endContainer = prev;
          // eslint-disable-next-line no-param-reassign
          fakeRange.endOffset = getLength(prev);
        }
      }

      detach(child);

      if (child instanceof Text) {
        (prev as Text).appendData(child.data);
      } else {
        frags.push(empty(child));
      }
    } else if (child instanceof Element) {
      let frag: DocumentFragment | undefined;

      // eslint-disable-next-line no-cond-assign
      while ((frag = frags.pop())) {
        child.appendChild(frag);
      }

      _mergeInlines(child, fakeRange);
    }
  }
};

const mergeInlines = (node: Node, range: Range): void => {
  const element = node instanceof Text ? node.parentNode : node;

  if (element instanceof Element) {
    const fakeRange = {
      startContainer: range.startContainer,
      startOffset: range.startOffset,
      endContainer: range.endContainer,
      endOffset: range.endOffset,
    };

    _mergeInlines(element, fakeRange);
    range.setStart(fakeRange.startContainer, fakeRange.startOffset);
    range.setEnd(fakeRange.endContainer, fakeRange.endOffset);
  }
};

const mergeWithBlock = (
  block: Node,
  next: Node,
  range: Range,
  root: Element,
): void => {
  let container = next;
  let parent: Node | null;
  let offset: number;

  while (
    // eslint-disable-next-line no-cond-assign
    (parent = container.parentNode) &&
    parent !== root &&
    parent instanceof Element &&
    parent.childNodes.length === 1
  ) {
    container = parent;
  }

  detach(container);

  offset = block.childNodes.length;

  // Remove extra <BR> fixer if present.
  const last = block.lastChild;

  if (last && last.nodeName === 'BR') {
    block.removeChild(last);
    offset -= 1;
  }

  block.appendChild(empty(next));

  range.setStart(block, offset);
  range.collapse(true);
  mergeInlines(block, range);
};

const mergeContainers = (node: Node, root: Element): void => {
  const prev = node.previousSibling;
  const first = node.firstChild;
  const isListItem = node.nodeName === 'LI';

  // Do not merge LIs, unless it only contains a UL
  if (isListItem && (!first || !/^[OU]L$/.test(first.nodeName))) {
    return;
  }

  if (prev && areAlike(prev, node)) {
    if (!isContainer(prev)) {
      if (isListItem) {
        const block = createElement('DIV');
        block.appendChild(empty(prev));
        prev.appendChild(block);
      } else {
        return;
      }
    }

    detach(node);

    const needsFix = !isContainer(node);
    prev.appendChild(empty(node));

    if (needsFix) {
      fixContainer(prev, root);
    }

    if (first) {
      mergeContainers(first, root);
    }
  } else if (isListItem) {
    const block = createElement('DIV');

    node.insertBefore(block, first);
    fixCursor(block);
  }
};

// ---

export {
  fixContainer,
  fixCursor,
  mergeContainers,
  mergeInlines,
  mergeWithBlock,
  split,
};
