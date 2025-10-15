/* eslint-disable */
import type { Squire } from '../Editor';
import { SQUIRE_BLOCKQUOTE_TOGGLE_BUTTON_CLASS } from '../Constants';
import { getNextBlock } from '../node/Block';
import {
  fixContainer,
  mergeContainers,
  mergeWithBlock,
} from '../node/MergeSplit';
import { detach } from '../node/Node';
import {
  getStartBlockOfRange,
  rangeDoesEndAtBlockBoundary,
} from '../range/Block';
import {
  moveRangeBoundariesDownTree,
  moveRangeBoundariesUpTree,
} from '../range/Boundaries';
import { deleteContentsOfRange } from '../range/InsertDelete';
import { afterDelete, detachUneditableNode } from './KeyHelpers';

// ---

const Delete = (self: Squire, event: KeyboardEvent, range: Range): void => {
  const root = self._root;
  let current: Node | null;
  let next: Node | null;
  let originalRange: Range;
  let cursorContainer: Node;
  let cursorOffset: number;
  let nodeAfterCursor: Node;
  self._removeZWS();
  // Record undo checkpoint.
  self.saveUndoState(range);

  // TO JEST NASZ FIX, jezeli uzytkownik zaznaczy tekst a w nim bedzie sie znajdowal guzik od odkrywania blockquote to niech go usunie, ale blockquote rowniez
  const hideBlockQuoteButton = self._root.querySelector(
    `[${SQUIRE_BLOCKQUOTE_TOGGLE_BUTTON_CLASS}]`,
  );

  if (
    (hideBlockQuoteButton &&
      range.intersectsNode(hideBlockQuoteButton as Node)) ||
    range.startContainer === hideBlockQuoteButton ||
    range.endContainer === hideBlockQuoteButton ||
    range.startContainer.contains(hideBlockQuoteButton) ||
    range.endContainer.contains(hideBlockQuoteButton)
  ) {
    const blockQuote = self._root.querySelector('blockquote');

    blockQuote?.remove();
    hideBlockQuoteButton?.remove();
  }
  // KONIEC NASZEGO FIXA

  // If not collapsed, delete contents
  if (!range.collapsed) {
    event.preventDefault();
    deleteContentsOfRange(self, range, root);
    afterDelete(self, range);
    // If at end of block, merge next into this block
  } else if (rangeDoesEndAtBlockBoundary(range, root)) {
    event.preventDefault();
    current = getStartBlockOfRange(range, root);
    if (!current) {
      return;
    }
    // In case inline data has somehow got between blocks.
    fixContainer(current.parentNode!, root);
    // Now get next block
    next = getNextBlock(current, root);
    // Must not be at the very end of the text area.
    if (next) {
      // If not editable, just delete whole block.
      if (!(next as HTMLElement).isContentEditable) {
        detachUneditableNode(next, root);
        return;
      }
      // Otherwise merge.
      mergeWithBlock(current, next, range, root);
      // If deleted line between containers, merge newly adjacent
      // containers.
      next = current.parentNode!;
      while (next !== root && !next.nextSibling) {
        next = next.parentNode!;
      }
      if (next !== root && (next = next.nextSibling)) {
        mergeContainers(next, root);
      }
      self.setSelection(range);
      self._updatePath(range, true);
    }
    // Otherwise, leave to browser but check afterwards whether it has
    // left behind an empty inline tag.
  } else {
    // But first check if the cursor is just before an IMG tag. If so,
    // delete it ourselves, because the browser won't if it is not
    // inline.
    originalRange = range.cloneRange();
    moveRangeBoundariesUpTree(range, root, root, root);
    cursorContainer = range.endContainer;
    cursorOffset = range.endOffset;
    if (cursorContainer instanceof Element) {
      nodeAfterCursor = cursorContainer.childNodes[cursorOffset];
      if (nodeAfterCursor && nodeAfterCursor.nodeName === 'IMG') {
        event.preventDefault();
        detach(nodeAfterCursor);
        moveRangeBoundariesDownTree(range);
        afterDelete(self, range);
        return;
      }
    }
    self.setSelection(originalRange);
    setTimeout(() => {
      afterDelete(self);
    }, 0);
  }
};

// ---

export { Delete };
