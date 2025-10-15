import {
  KEYBOARD_NAVIGATION_ELEMENT_CLASS,
  KEYBOARD_NAVIGATION_ELEMENT_DISABLED_CLASS,
} from './constants';

type Cand = { id: string; dist: number; offset: number };

export const pickFirstKeyNavElement = (groupIds: string[]) => {
  const keyNavElements = Array.from(
    document.querySelectorAll(
      `.${KEYBOARD_NAVIGATION_ELEMENT_CLASS}:not(.${KEYBOARD_NAVIGATION_ELEMENT_DISABLED_CLASS})`,
    ),
  ).filter((el) => groupIds.includes(el.id));

  if (keyNavElements.length === 0) {
    return '';
  }

  return keyNavElements[0].id;
};

// znajdujemy element najbliżej lewego górnego rogu
// (0,0) w oknie przeglądarki
export const pickClosestToTopLeft = (groupIds: string[]) => {
  let minId = '';
  let minVal = Infinity; // do porównywania "odległości"

  if (groupIds.length === 0) {
    return minId;
  }

  groupIds.forEach((id) => {
    const el = document.getElementById(id);

    if (
      el &&
      !el.className.includes(KEYBOARD_NAVIGATION_ELEMENT_DISABLED_CLASS)
    ) {
      const rect = el.getBoundingClientRect();

      // Do testów tez dystans euklidesowy: sqrt(top^2 + left^2).
      const distance = Math.sqrt(rect.top * rect.top + rect.left * rect.left);
      // sprawdzamy sumę top + left
      // const distance = rect.top + rect.left;

      if (distance < minVal) {
        minVal = distance;
        minId = id;
      }
    }
  });

  return minId;
};

export const nextTabElement = (
  groupIds: string[],
  currentElementId: string,
  isShift: boolean,
) => {
  // wybieramy elementy KEY_NAV, ale tylko te, ktore sa w grupie
  const keyNavElements = Array.from(
    document.querySelectorAll(
      `.${KEYBOARD_NAVIGATION_ELEMENT_CLASS}:not(.${KEYBOARD_NAVIGATION_ELEMENT_DISABLED_CLASS})`,
    ),
  ).filter((el) => groupIds.includes(el.id));

  const currentElement = document.getElementById(currentElementId);

  if (keyNavElements.length === 0 || groupIds.length === 0 || !currentElement) {
    return '';
  }

  const currentElementIndex = keyNavElements.indexOf(currentElement);

  // jeśli nie znaleziono elementu, to zwracamy pusty string
  if (currentElementIndex === -1) {
    return '';
  }

  if (isShift) {
    if (currentElementIndex === 0) {
      // jeśli to pierwszy element, to nie ma poprzedniego wiec bierzemy ostatni
      return keyNavElements[keyNavElements.length - 1].id;
    }

    return keyNavElements[currentElementIndex - 1].id;
  }

  if (currentElementIndex === keyNavElements.length - 1) {
    // jeśli to ostatni element, to nie ma następnego wiec bierzemy pierwszy
    return keyNavElements[0].id;
  }

  return keyNavElements[currentElementIndex + 1].id;
};

export const findClosestInDirection = (
  direction: 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight',
  currentElementId: string,
  groupIds: string[],
): string => {
  if (groupIds.length === 0 || currentElementId === '') {
    return '';
  }

  const curEl = document.getElementById(currentElementId);

  if (!curEl) {
    return '';
  }

  const c = curEl.getBoundingClientRect();

  const candidates: Cand[] = [];

  groupIds.forEach((id) => {
    if (id === currentElementId) {
      return;
    }

    const el = document.getElementById(id);

    // jeśli element nie istnieje lub ma klasę disabled, to go pomijamy
    if (
      !el ||
      el.className.includes(KEYBOARD_NAVIGATION_ELEMENT_DISABLED_CLASS)
    ) {
      return;
    }

    const r = el.getBoundingClientRect();

    let onSide = false;
    let dx = 0;
    let dy = 0;

    switch (direction) {
      case 'ArrowRight':
        onSide = r.left >= c.right;

        if (!onSide) {
          return;
        }

        dx = r.left - c.right;

        if (r.bottom < c.top) {
          dy = c.top - r.bottom;
        } else if (r.top > c.bottom) {
          dy = r.top - c.bottom;
        } else {
          dy = 0;
        }

        break;

      case 'ArrowLeft':
        onSide = r.right <= c.left;

        if (!onSide) {
          return;
        }

        dx = c.left - r.right;

        if (r.bottom < c.top) {
          dy = c.top - r.bottom;
        } else if (r.top > c.bottom) {
          dy = r.top - c.bottom;
        } else {
          dy = 0;
        }

        break;

      case 'ArrowDown':
        onSide = r.top >= c.bottom;

        if (!onSide) {
          return;
        }

        dy = r.top - c.bottom;

        if (r.right < c.left) {
          dx = c.left - r.right;
        } else if (r.left > c.right) {
          dx = r.left - c.right;
        } else {
          dx = 0;
        }

        break;

      case 'ArrowUp':
        onSide = r.bottom <= c.top;

        if (!onSide) {
          return;
        }

        dy = c.top - r.bottom;

        if (r.right < c.left) {
          dx = c.left - r.right;
        } else if (r.left > c.right) {
          dx = r.left - c.right;
        } else {
          dx = 0;
        }

        break;
      default:
        return; // nieobsługiwany klawisz
    }

    const dist = Math.hypot(dx, dy);
    const offset =
      direction === 'ArrowLeft' || direction === 'ArrowRight' ? dy : dx;

    candidates.push({ id, dist, offset });
  });

  if (candidates.length === 0) {
    return '';
  }

  const straight = candidates.filter((can) => can.offset === 0);

  if (straight.length > 0) {
    straight.sort((a, b) => a.dist - b.dist);

    return straight[0].id;
  }

  candidates.sort((a, b) =>
    a.dist !== b.dist ? a.dist - b.dist : a.offset - b.offset,
  );
  return candidates[0].id;
};
