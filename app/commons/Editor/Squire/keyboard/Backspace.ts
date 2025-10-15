import {
  EDITOR_ELEMENT_ID,
  SQUIRE_BLOCKQUOTE_TOGGLE_BUTTON_CLASS,
} from '../Constants';
import type { Squire } from '../Editor';
import { getPreviousBlock } from '../node/Block';
import {
  fixContainer,
  mergeContainers,
  mergeWithBlock,
} from '../node/MergeSplit';
import { createElement, getNearest } from '../node/Node';
import {
  getStartBlockOfRange,
  rangeDoesStartAtBlockBoundary,
} from '../range/Block';
import { moveRangeBoundariesDownTree } from '../range/Boundaries';
import { deleteContentsOfRange } from '../range/InsertDelete';
import { afterDelete, detachUneditableNode } from './KeyHelpers';

// ---

const Backspace = (self: Squire, event: KeyboardEvent, range: Range): void => {
  const root: Element = self._root;
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
    const blockQuote = root.querySelector('blockquote');

    blockQuote?.remove();
    hideBlockQuoteButton?.remove();
  }
  // KONIEC NASZEGO FIXA

  if (!range.collapsed) {
    // If not collapsed, delete contents
    event.preventDefault();
    deleteContentsOfRange(self, range, root);
    afterDelete(self, range);
  } else if (rangeDoesStartAtBlockBoundary(range, root)) {
    // If at beginning of block, merge with previous
    event.preventDefault();
    const startBlock = getStartBlockOfRange(range, root);
    if (!startBlock) {
      return;
    }
    let current = startBlock;
    // In case inline data has somehow got between blocks.
    fixContainer(current.parentNode!, root);
    // Now get previous block
    const previous = getPreviousBlock(current, root);

    // TO JEST NASZ FIX NA USUWANIE WSZYSTKICH BLOCKQUOTE, ktore sa w sasiedztwie, jezeli usuwamy pierwszy element w blockquote (pusty DIV dokładniej) to usuwamy caly blockquote
    const nearestBlockQuote = getNearest(current, root, 'BLOCKQUOTE');

    if (
      !nearestBlockQuote?.contains(previous) &&
      current &&
      !!nearestBlockQuote
    ) {
      const blockQuotes = root.querySelectorAll('blockquote');

      // musimy iterowac od tylu, bo podmieniamy elementy z kolekcji i musimy leciec w gore drzewa
      [...blockQuotes].reverse().forEach((blockQuote) => {
        if (nearestBlockQuote.contains(blockQuote)) {
          const div = createElement('div');

          div.innerHTML = blockQuote.innerHTML;

          // ODKOMENTOWAC Gdyby bysmy chcieli kopiowac atrybuty

          // eslint-disable-next-line no-restricted-syntax
          // for (const attr of blockQuote.attributes) {
          //   div.setAttribute(attr.name, attr.value);
          // }

          // Zamień blockquote na nowy div
          blockQuote?.parentNode?.replaceChild(div, blockQuote);
        }
      });

      return;
    }

    // TO JEST NASZ FIX NA WKLEJANE ELEMENTY HTML, w momencie gdy na poczatku maila wkleimy htmla to zostaja style i nie da sie ich zmienic, bo piszemy wewnatrz kontenera, ktory ma je nadane,
    // rozwiazanie to replace wtedy na defaultowy blok
    if (!previous) {
      const replaceElement = createElement(self._config.blockTag);

      replaceElement.innerText = current.innerText;

      try {
        if (current?.parentElement?.getAttribute('id') === EDITOR_ELEMENT_ID) {
          current.replaceWith(replaceElement);
        } else {
          self._root.insertBefore(replaceElement, current.parentNode);
          current.remove();
          self._restoreSelection();
        }
      } catch {}
    }
    // KONIEC NASZEGO FIXA

    // Must not be at the very beginning of the text area.
    if (previous) {
      // If not editable, just delete whole block.
      if (!(previous as HTMLElement).isContentEditable) {
        detachUneditableNode(previous, root);
        return;
      }

      // Otherwise merge.
      mergeWithBlock(previous, current, range, root);
      // If deleted line between containers, merge newly adjacent
      // containers.
      current = previous.parentNode as HTMLElement;

      while (current !== root && !current.nextSibling) {
        current = current.parentNode as HTMLElement;
      }

      // eslint-disable-next-line no-cond-assign
      if (current !== root && (current = current.nextSibling as HTMLElement)) {
        mergeContainers(current, root);
      }

      self.setSelection(range);
      // If at very beginning of text area, allow backspace
      // to break lists/blockquote.
    } else if (current) {
      if (getNearest(current, root, 'UL') || getNearest(current, root, 'OL')) {
        // Break list
        self.decreaseListLevel(range);
        return;
      }

      if (getNearest(current, root, 'BLOCKQUOTE')) {
        self.removeQuote(range);
        return;
      }

      self.setSelection(range);
      self._updatePath(range, true);
    }
  } else {
    // If deleting text inside a link that looks like a URL, delink.
    // This is to allow you to easily correct auto-linked text.
    moveRangeBoundariesDownTree(range);
    const text = range.startContainer;
    const offset = range.startOffset;
    const a = text.parentNode;

    if (
      text instanceof Text &&
      a instanceof HTMLAnchorElement &&
      offset &&
      a.href.includes(text.data)
    ) {
      text.deleteData(offset - 1, 1);
      self.setSelection(range);
      self.removeLink();
      event.preventDefault();
    } else if (
      text instanceof Text &&
      a instanceof HTMLAnchorElement &&
      offset &&
      !a.href.includes(text.data)
    ) {
      self.setSelection(range);
      self.removeLink();
      event.preventDefault();
    } else {
      // Otherwise, leave to browser but check afterwards whether it has
      // left behind an empty inline tag.
      self.setSelection(range);
      setTimeout(() => {
        afterDelete(self);
      }, 0);
    }
  }
};

// ---

export { Backspace };
