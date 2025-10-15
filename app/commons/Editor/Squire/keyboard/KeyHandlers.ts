/* eslint-disable */
import {
  ctrlKey,
  isIOS,
  isMac,
  isWin,
  supportsInputEvents,
  EDITOR_IMAGE_CONTAINER_CLASS,
  SQUIRE_BLOCKQUOTE_TOGGLE_BUTTON_CLASS,
  SQUIRE_IMG_ID_KEY,
} from '../Constants';
import type { Squire } from '../Editor';
import { rangeDoesEndAtBlockBoundary } from '../range/Block';
import { moveRangeBoundariesDownTree } from '../range/Boundaries';
import { deleteContentsOfRange } from '../range/InsertDelete';
import { Backspace } from './Backspace';
import { Delete } from './Delete';
import { Enter } from './Enter';
import { Space } from './Space';
import { ShiftTab, Tab } from './Tab';

// ---

const keys: Record<string, string> = {
  8: 'Backspace',
  9: 'Tab',
  13: 'Enter',
  27: 'Escape',
  32: 'Space',
  33: 'PageUp',
  34: 'PageDown',
  37: 'ArrowLeft',
  38: 'ArrowUp',
  39: 'ArrowRight',
  40: 'ArrowDown',
  46: 'Delete',
  191: '/',
  219: '[',
  220: '\\',
  221: ']',
};

// Ref: http://unixpapa.com/js/key.html
const _onKey = function (this: Squire, event: KeyboardEvent): void {
  const code = event.keyCode;

  let key = keys[code];
  let modifiers = '';
  const imgEditContainer = this._root.querySelector(
    `.${EDITOR_IMAGE_CONTAINER_CLASS}`,
  );

  let range: Range = this.getSelection();

  if (event.defaultPrevented) {
    return;
  }

  if (!key) {
    key = String.fromCharCode(code).toLowerCase();
    // Only reliable for letters and numbers
    if (!/^[A-Za-z0-9]$/.test(key)) {
      key = '';
    }
  }

  // Function keys
  if (code > 111 && code < 124) {
    key = `F${code - 111}`;
  }

  // We need to apply the Backspace/delete handlers regardless of
  // control key modifiers.
  if (key !== 'Backspace' && key !== 'Delete') {
    if (event.altKey) {
      modifiers += 'Alt-';
    }

    if (event.ctrlKey) {
      modifiers += 'Ctrl-';
    }

    if (event.metaKey) {
      modifiers += 'Meta-';
    }

    if (event.shiftKey) {
      modifiers += 'Shift-';
    }
  } else if (imgEditContainer) {
    // usuwanie obrazka w trybie edycji jak ktos kliknie backspace/delete i ustawia range na obrazku (bez zaznaczonego fragmentu HTML, tylko kursor za obrazkiem lub przed)
    try {
      if (
        range.collapsed &&
        (range.intersectsNode(imgEditContainer) ||
          range.startContainer === imgEditContainer ||
          range.endContainer === imgEditContainer ||
          range.startContainer.contains(imgEditContainer) ||
          range.endContainer.contains(imgEditContainer))
      ) {
        event.preventDefault();

        const newRange = document.createRange();
        const nextSibling = imgEditContainer.nextSibling;
        const prevSibling = imgEditContainer.previousSibling;

        const id = imgEditContainer
          .querySelector('img')
          ?.getAttribute(SQUIRE_IMG_ID_KEY);

        if (id) {
          this._config.uploadImageCancel(id);
        }

        imgEditContainer.remove();

        if (nextSibling) {
          newRange.setStart(nextSibling, 0);
          newRange.setEnd(nextSibling, 0);
        } else if (prevSibling) {
          const offset =
            prevSibling.nodeType === Node.TEXT_NODE
              ? (prevSibling as Text).length
              : 0;
          newRange.setStart(prevSibling, offset);
          newRange.setEnd(prevSibling, offset);
        } else {
          const parent = imgEditContainer.parentNode || this._root;
          newRange.setStart(parent, 0);
          newRange.setEnd(parent, 0);
        }

        range = newRange;
      }
    } catch {}
  } else if (range.collapsed) {
    // W momencie gdy jest tylko kursor (nie ma zaznaczenia) i uzytkownik zrobil DELETE/BACKSPACE to anulujemy upload jezeli to obrazek
    const { startContainer, startOffset } = range;
    let imgToCheck: HTMLImageElement | null = null;

    // Sprawdzamy czy bezposrednio przed kursorem (dla Backspace) lub za kursorem (dla Delete) jest obrazek
    if (key === 'Backspace' && startOffset > 0) {
      const nodeBeforeCursor = startContainer.childNodes[startOffset - 1];

      if (nodeBeforeCursor?.nodeName === 'IMG') {
        imgToCheck = nodeBeforeCursor as HTMLImageElement;
      }
    } else if (
      key === 'Delete' &&
      startOffset < startContainer.childNodes.length
    ) {
      const nodeAfterCursor = startContainer.childNodes[startOffset];

      if (nodeAfterCursor?.nodeName === 'IMG') {
        imgToCheck = nodeAfterCursor as HTMLImageElement;
      }
    }

    if (imgToCheck) {
      const id = imgToCheck.getAttribute(SQUIRE_IMG_ID_KEY);

      if (id) {
        this._config.uploadImageCancel(id);
      }
    }
  }

  // Jezeli przyciski to nie shift ctrl itp to usuwamy editables
  if (!event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey) {
    this.clearEditables();
  }

  // However, on Windows, Shift-Delete is apparently "cut" (WTF right?), so
  // we want to let the browser handle Shift-Delete in this situation.
  if (isWin && event.shiftKey && key === 'Delete') {
    modifiers += 'Shift-';
  }

  key = modifiers + key;

  if (this._keyHandlers[key]) {
    this._keyHandlers[key](this, event, range);
  } else if (
    !range.collapsed &&
    // !event.isComposing stops us from blatting Kana-Kanji conversion in
    // Safari
    !event.isComposing &&
    !event.ctrlKey &&
    !event.metaKey &&
    (event.key || key).length === 1
  ) {
    // Record undo checkpoint.
    this.saveUndoState(range);
    // Delete the selection
    deleteContentsOfRange(this, range, this._root);
    this._ensureBottomLine();
    this.setSelection(range);
    this._updatePath(range, true);
  }
};

// ---

type KeyHandler = (self: Squire, event: KeyboardEvent, range: Range) => void;

const keyHandlers: Record<string, KeyHandler> = {
  Backspace,
  Delete,
  Tab,
  'Shift-Tab': ShiftTab,
  Space,
  ArrowLeft(self: Squire): void {
    self._removeZWS();
  },
  ArrowRight(self: Squire, event: KeyboardEvent, range: Range): void {
    self._removeZWS();
    // Allow right arrow to always break out of <code> block.
    const root = self.getRoot();
    if (rangeDoesEndAtBlockBoundary(range, root)) {
      moveRangeBoundariesDownTree(range);
      let node: Node | null = range.endContainer;
      do {
        if (node.nodeName === 'CODE') {
          let next = node.nextSibling;
          if (!(next instanceof Text)) {
            const textNode = document.createTextNode(' '); // nbsp
            node.parentNode!.insertBefore(textNode, next);
            next = textNode;
          }
          range.setStart(next, 1);
          self.setSelection(range);
          event.preventDefault();
          break;
        }
      } while (!node.nextSibling && (node = node.parentNode) && node !== root);
    }
  },
};

if (!supportsInputEvents) {
  keyHandlers.Enter = Enter;
  keyHandlers['Shift-Enter'] = Enter;
}

// System standard for page up/down on Mac/iOS is to just scroll, not move the
// cursor. On Linux/Windows, it should move the cursor, but some browsers don't
// implement this natively. Override to support it.
if (!isMac && !isIOS) {
  keyHandlers.PageUp = (self: Squire) => {
    self.moveCursorToStart();
  };
  keyHandlers.PageDown = (self: Squire) => {
    self.moveCursorToEnd();
  };
}

// ---

const mapKeyToFormat = (
  tag: string,
  remove?: { tag: string } | null,
): KeyHandler => {
  remove = remove || null;
  return (self: Squire, event: Event) => {
    event.preventDefault();
    const range = self.getSelection();
    if (self.hasFormat(tag, null, range)) {
      self.changeFormat(null, { tag }, range);
    } else {
      self.changeFormat({ tag }, remove, range);
    }
  };
};

keyHandlers[`${ctrlKey}b`] = mapKeyToFormat('B');
keyHandlers[`${ctrlKey}i`] = mapKeyToFormat('I');
keyHandlers[`${ctrlKey}u`] = mapKeyToFormat('U');
keyHandlers[`${ctrlKey}Shift-7`] = mapKeyToFormat('S');
keyHandlers[`${ctrlKey}Shift-5`] = mapKeyToFormat('SUB', { tag: 'SUP' });
keyHandlers[`${ctrlKey}Shift-6`] = mapKeyToFormat('SUP', { tag: 'SUB' });

keyHandlers[`${ctrlKey}Shift-8`] = (
  self: Squire,
  event: KeyboardEvent,
): void => {
  event.preventDefault();
  const path = self.getPath();
  if (!/(?:^|>)UL/.test(path)) {
    self.makeUnorderedList();
  } else {
    self.removeList();
  }
};
keyHandlers[`${ctrlKey}Shift-9`] = (
  self: Squire,
  event: KeyboardEvent,
): void => {
  event.preventDefault();
  const path = self.getPath();
  if (!/(?:^|>)OL/.test(path)) {
    self.makeOrderedList();
  } else {
    self.removeList();
  }
};

keyHandlers[`${ctrlKey}[`] = (self: Squire, event: KeyboardEvent): void => {
  event.preventDefault();
  const path = self.getPath();
  if (/(?:^|>)BLOCKQUOTE/.test(path) || !/(?:^|>)[OU]L/.test(path)) {
    self.decreaseQuoteLevel();
  } else {
    self.decreaseListLevel();
  }
};
keyHandlers[`${ctrlKey}]`] = (self: Squire, event: KeyboardEvent): void => {
  event.preventDefault();
  const path = self.getPath();
  if (/(?:^|>)BLOCKQUOTE/.test(path) || !/(?:^|>)[OU]L/.test(path)) {
    self.increaseQuoteLevel();
  } else {
    self.increaseListLevel();
  }
};

keyHandlers[`${ctrlKey}d`] = (self: Squire, event: KeyboardEvent): void => {
  event.preventDefault();
  self.toggleCode();
};

keyHandlers[`${ctrlKey}z`] = (self: Squire, event: KeyboardEvent): void => {
  // Sprawdzamy czy przed undo byl button do pokazywania blockquote, bo jak otworzymy blockquote to button znika i traci onClick
  const showBlockQuoteButtonBeforeUndo = self._root.querySelector(
    `[${SQUIRE_BLOCKQUOTE_TOGGLE_BUTTON_CLASS}]`,
  );

  event.preventDefault();
  self.undo();

  // TUTAJ NASZ FIX, na przywracanie onCLicka na buttona do odkrywania blockquote, poniewaz jak otworzymy blockquote to button znika i po CTRL Z przywracamy button bez onclicka
  if (!showBlockQuoteButtonBeforeUndo) {
    const showBlockQuoteButton = self._root.querySelector(
      `[${SQUIRE_BLOCKQUOTE_TOGGLE_BUTTON_CLASS}]`,
    );

    const blockQuote = self._root.querySelector('blockquote');

    self.addShowBlockQuoteButtonListeners(showBlockQuoteButton, blockQuote);
  }
};
keyHandlers[`${ctrlKey}y`] = keyHandlers[`${ctrlKey}Shift-z`] = (
  self: Squire,
  event: KeyboardEvent,
): void => {
  event.preventDefault();
  self.redo();
};

export { _onKey, keyHandlers };
