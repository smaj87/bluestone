import { dispatch } from 'commons/utils/store';

import { batchNavElements } from './actions';
import { NavTreeElement } from './types';

let toAdd: NavTreeElement[] = [];
let toRemove: NavTreeElement[] = [];
let scheduled = false;

let flushPromise: Promise<void>;
let flushResolve!: () => void;

// Funkcja do dodawania i usuwania elementów nawigacji w partiach
export function queueNavBatchChange({
  add,
  remove,
}: {
  add?: NavTreeElement;
  remove?: NavTreeElement;
}): Promise<void> {
  if (add) {
    toAdd.push(add);
  }

  if (remove) {
    toRemove.push(remove);
  }

  if (!scheduled) {
    scheduled = true;

    flushPromise = new Promise<void>((resolve) => {
      flushResolve = resolve;
    });

    Promise.resolve().then(() => {
      dispatch(batchNavElements(toAdd, toRemove));
      toAdd = [];
      toRemove = [];
      scheduled = false;
      flushResolve();
    });
  }

  return flushPromise;
}
