import { ZWS } from '../Constants';
import type { Squire } from '../Editor';
import { getPreviousBlock } from '../node/Block';
import { isBlock, isInline } from '../node/Category';
import { fixCursor } from '../node/MergeSplit';
import { createElement, detach, getNearest } from '../node/Node';
import { moveRangeBoundariesDownTree } from '../range/Boundaries';

// ---

// If you delete the content inside a span with a font styling, Webkit will
// replace it with a <font> tag (!). If you delete all the text inside a
// link in Opera, it won't delete the link. Let's make things consistent. If
// you delete all text inside an inline tag, remove the inline tag.
const afterDelete = (self: Squire, range?: Range): void => {
  try {
    if (!range) {
      // eslint-disable-next-line no-param-reassign
      range = self.getSelection();
    }

    let node = range!.startContainer;

    // Climb the tree from the focus point while we are inside an empty
    // inline element
    if (node instanceof Text) {
      node = node.parentNode!;
    }

    let parent = node;

    while (
      isInline(parent) &&
      (!parent.textContent || parent.textContent === ZWS)
    ) {
      node = parent;
      parent = node.parentNode!;
    }

    // If focused in empty inline element
    if (node !== parent) {
      // Move focus to just before empty inline(s)
      range!.setStart(
        parent,
        Array.from(parent.childNodes as NodeListOf<Node>).indexOf(node),
      );

      range!.collapse(true);
      // Remove empty inline(s)
      parent.removeChild(node);

      // Fix cursor in block
      if (!isBlock(parent)) {
        parent = getPreviousBlock(parent, self._root) || self._root;
      }

      fixCursor(parent);
      // Move cursor into text node
      moveRangeBoundariesDownTree(range!);
    }

    // If you delete the last character in the sole <div> in Chrome,
    // it removes the div and replaces it with just a <br> inside the
    // root. Detach the <br>; the _ensureBottomLine call will insert a new
    // block.
    if (
      node === self._root &&
      // eslint-disable-next-line no-cond-assign
      (node = node.firstChild!) &&
      node.nodeName === 'BR'
    ) {
      detach(node);
    }

    self._ensureBottomLine();
    self.setSelection(range);
    self._updatePath(range, true);
  } catch (error) {
    self._config.didError(error);
  }
};

const detachUneditableNode = (node: Node, root: Element): void => {
  let parent: Node | null;

  // eslint-disable-next-line no-cond-assign
  while ((parent = node.parentNode)) {
    if (parent === root || (parent as HTMLElement).isContentEditable) {
      break;
    }

    // eslint-disable-next-line no-param-reassign
    node = parent;
  }

  detach(node);
};

// --- Dodaje linki jezeli je wpisujemy z palca (do wklejanych linkow jest addDetectedLinks)

const linkifyText = (self: Squire, textNode: Text, offset: number): void => {
  if (getNearest(textNode, self._root, 'A')) {
    return;
  }

  const data = textNode.data || '';

  const searchFrom =
    Math.max(
      data.lastIndexOf(' ', offset - 1),
      data.lastIndexOf(' ', offset - 1),
    ) + 1;

  const searchText = data.slice(searchFrom, offset);
  const match = self.linkRegExp.exec(searchText);

  if (match) {
    // Record an undo point
    const selection = self.getSelection();
    self._docWasChanged();
    self._recordUndoState(selection);
    self._getRangeAndRemoveBookmark(selection);

    const index = searchFrom + match.index;
    const endIndex = index + match[0].length;
    const needsSelectionUpdate = selection.startContainer === textNode;
    const newSelectionOffset = selection.startOffset - endIndex;

    if (index) {
      // eslint-disable-next-line no-param-reassign
      textNode = textNode.splitText(index);
    }

    const defaultAttributes = self._config.tagAttributes.a;
    const link = createElement('A', {
      // eslint-disable-next-line no-nested-ternary
      href: match[1]
        ? /^(?:ht|f)tps?:/i.test(match[1])
          ? match[1]
          : `http://${match[1]}`
        : `mailto:${match[0]}`,
      ...defaultAttributes,
      contenteditable: 'false',
    });

    link.textContent = data.slice(index, endIndex);
    textNode.parentNode!.insertBefore(link, textNode);
    // eslint-disable-next-line no-param-reassign
    textNode.data = data.slice(endIndex);

    if (needsSelectionUpdate) {
      selection.setStart(textNode, newSelectionOffset);
      selection.setEnd(textNode, newSelectionOffset);
    }

    self.setSelection(selection);
  }
};

// ---

export { afterDelete, detachUneditableNode, linkifyText };
